#!/usr/bin/env node
// Optional dedicated browser shell. The default static web game is unchanged.
// Permissions apply only to this browser process/profile and the fixed origin.
const fs = require('node:fs');
const fsp = fs.promises;
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { spawn, execFileSync } = require('node:child_process');
const { once } = require('node:events');
const ROOT = path.resolve(__dirname, '..');
const PORT = 8127;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json', '.glb':'model/gltf-binary', '.gltf':'model/gltf+json', '.wasm':'application/wasm', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.wav':'audio/wav', '.ogg':'audio/ogg', '.mp3':'audio/mpeg' };
const inside = (root, file) => { const relative = path.relative(root, file); return relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative)); };

async function createLocalServer({ root = ROOT, port = PORT } = {}) {
  const realRoot = await fsp.realpath(root);
  const server = http.createServer(async (req, res) => {
    const reply = (code, text) => { res.writeHead(code, {'Content-Type':'text/plain; charset=utf-8','X-Content-Type-Options':'nosniff'}); res.end(text); };
    const boundPort = server.address()?.port;
    if (req.headers.host !== `127.0.0.1:${boundPort}`) return reply(421, 'Use the launcher address shown in its terminal.');
    if (!['GET','HEAD'].includes(req.method)) { res.setHeader('Allow','GET, HEAD'); return reply(405,'Method not allowed.'); }
    let decoded;
    try { decoded = decodeURIComponent((req.url || '/').split('?')[0]); } catch { return reply(400,'Invalid path.'); }
    const segments = decoded.split('/').filter(Boolean);
    if (!decoded.startsWith('/') || decoded.includes('\\') || decoded.includes('\0') || segments.some(p => p.startsWith('.') || p.includes(':'))) return reply(403,'Path not allowed.');
    const relative = segments.length ? segments.join(path.sep) : 'index.html';
    const top = segments[0];
    const allowedRoot = !top || (segments.length === 1 && (top === 'index.html' || ['.js','.css'].includes(path.extname(top))));
    if (!allowedRoot && !['assets','packs','fonts'].includes(top)) return reply(403,'Only game files are served.');
    try {
      const candidate = path.resolve(realRoot, relative);
      if (!inside(realRoot, candidate)) return reply(403,'Path not allowed.');
      const actual = await fsp.realpath(candidate);
      if (!inside(realRoot, actual)) return reply(403,'Path not allowed.');
      const stat = await fsp.stat(actual);
      if (!stat.isFile()) return reply(404,'File not found.');
      res.writeHead(200, {'Content-Type':MIME[path.extname(actual).toLowerCase()] || 'application/octet-stream','Content-Length':stat.size,'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
      if (req.method === 'HEAD') return res.end();
      fs.createReadStream(actual).on('error', () => res.destroy()).pipe(res);
    } catch (error) { reply(error.code === 'ENOENT' || error.code === 'ENOTDIR' ? 404 : 500,'File not found.'); }
  });
  await new Promise((resolve, reject) => {
    server.once('error', error => {
      if (error.code === 'EADDRINUSE') error.message = `127.0.0.1:${port} is already in use. Close the other Signal Debt launcher or the process using that port.`;
      reject(error);
    });
    server.listen({host:'127.0.0.1',port,exclusive:true}, resolve);
  });
  return server;
}

function profilePath(platform = process.platform, env = process.env, home = os.homedir()) {
  if (platform === 'win32') return path.win32.join(env.LOCALAPPDATA || path.win32.join(home,'AppData','Local'),'SignalDebt','CouchProfile');
  if (platform === 'darwin') return path.join(home,'Library','Application Support','SignalDebt','CouchProfile');
  return path.join(env.XDG_DATA_HOME || path.join(home,'.local','share'),'SignalDebt','CouchProfile');
}

function chromePath(explicit) {
  if (explicit) { if (!fs.existsSync(explicit)) throw Error(`Chrome executable not found: ${explicit}`); return explicit; }
  const candidates = process.platform === 'win32'
    ? [path.join(process.env.PROGRAMFILES || 'C:\\Program Files','Google','Chrome','Application','chrome.exe'),path.join(process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)','Google','Chrome','Application','chrome.exe'),path.join(process.env.LOCALAPPDATA || '', 'Google','Chrome','Application','chrome.exe')]
    : process.platform === 'darwin'
      ? ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome','/Applications/Chromium.app/Contents/MacOS/Chromium']
      : ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
  const found = candidates.find(file => fs.existsSync(file));
  if (found) return found;
  const bundled = require('playwright-core').chromium.executablePath();
  if (fs.existsSync(bundled)) return bundled;
  throw Error('Chrome was not found. Install a current Chrome or pass --browser /path/to/chrome.');
}

async function launchCouch({ profile = profilePath(), headless = false, executable, setupContext } = {}) {
  const server = await createLocalServer();
  let context, closing = false, resolveClosed;
  const closed = new Promise(resolve => { resolveClosed = resolve; });
  async function close() {
    if (closing) return closed;
    closing = true;
    try { await context?.close(); } catch {}
    await new Promise(resolve => { server.close(resolve); server.closeAllConnections?.(); });
    resolveClosed();
  }
  try {
    await fsp.mkdir(profile,{recursive:true});
    const executablePath = chromePath(executable);
    const { chromium } = require('playwright-core');
    context = await chromium.launchPersistentContext(profile, {
      executablePath, headless, viewport:headless?{width:1280,height:720}:null,
      ignoreDefaultArgs:['--mute-audio'],
      args:['--autoplay-policy=no-user-gesture-required','--window-size=1600,900'],
      acceptDownloads:false,
    });
    const browser = context.browser();
    const cdp = await browser.newBrowserCDPSession();
    const grant = {permission:{name:'fullscreen',allowWithoutGesture:true},setting:'granted',origin:ORIGIN};
    await cdp.send('Browser.setPermission',grant);
    if (setupContext) await setupContext(context);
    const page = context.pages()[0] || await context.newPage();
    for (const other of context.pages()) if (other !== page) await other.close();
    context.on('close', () => { close(); });
    context.on('page', candidate => candidate.on('close', () => { if (!context.pages().some(p=>!p.isClosed())) close(); }));
    page.on('close', () => { if (!context.pages().some(p=>!p.isClosed())) close(); });
    await page.goto(ORIGIN + '/');
    return {server,context,browser,page,cdp,profile,executablePath,grant,origin:ORIGIN,close,closed};
  } catch (error) { await close(); throw error; }
}

async function rawClient(context, page) {
  const cdp = await context.newCDPSession(page);
  return { cdp, async evaluate(expression) {
    const result = await cdp.send('Runtime.evaluate',{expression,userGesture:false,returnByValue:true,awaitPromise:true});
    if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  }};
}
async function waitRaw(raw, expression, ms = 90000) {
  const start=Date.now();
  while(Date.now()-start<ms){if(await raw.evaluate(expression))return;await new Promise(resolve=>setTimeout(resolve,50));}
  throw Error(`Timed out waiting for ${expression}`);
}
async function strictPadSetup(context) {
  await context.addInitScript(() => {
    window.__couchPad={id:'Couch verification / standard controller',index:0,connected:true,mapping:'standard',timestamp:0,axes:[0,0,0,0],buttons:Array.from({length:18},()=>({pressed:false,touched:false,value:0}))};
    Object.defineProperty(navigator,'getGamepads',{configurable:true,value:()=>[window.__couchPad]});
    window.__couchAdapters=[];
    if(navigator.gpu){const request=navigator.gpu.requestAdapter.bind(navigator.gpu);navigator.gpu.requestAdapter=async options=>{const adapter=await request(options);if(adapter)window.__couchAdapters.push({vendor:adapter.info.vendor,architecture:adapter.info.architecture,isFallbackAdapter:adapter.info.isFallbackAdapter});return adapter;};}
  });
}
async function verifyCouch({ headless = true, executable, reportPath = path.join(ROOT,'docs','couch-launcher-review.json') } = {}) {
  const assert = require('node:assert/strict');
  const profile = await fsp.mkdtemp(path.join(os.tmpdir(),'SignalDebt-CouchVerify-'));
  const report={startedAt:new Date().toISOString(),origin:ORIGIN,normalProfile:profilePath(),verificationProfile:'Fresh temporary dedicated profile; removed after verification.',headless,method:'Only raw CDP Runtime.evaluate(userGesture:false) injects a standard fake pad. No keyboard/pointer events or page.evaluate. The profile is reopened to prove checkpoint persistence.',permission:{name:'fullscreen',allowWithoutGesture:true,origin:ORIGIN},autoplayFlag:'--autoplay-policy=no-user-gesture-required',sources:['https://chromedevtools.github.io/devtools-protocol/tot/Browser/#type-PermissionDescriptor','https://raw.githubusercontent.com/ChromeDevTools/devtools-protocol/master/json/browser_protocol.json','https://developer.chrome.com/blog/autoplay'],checks:[],errors:[],limitations:['Scripted standard gamepad; physical DualSense vibration was not tested.','Headless verification does not measure physical display/audio output quality.']};
  report.automaticFullscreenCooldownWaitMs=5500;
  report.cooldownExplanation='Chrome requires five real seconds after fullscreen exit before automatic re-entry. Verification waits 5.5 seconds.';
  report.relatedTests=['node --test tests/couch.test.mjs'];
  report.launchInstructions=['npm ci','node scripts/couch.cjs','Verify: node scripts/couch.cjs --verify --headless'];
  let launch;
  const save=()=>{fs.mkdirSync(path.dirname(reportPath),{recursive:true});fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');};
  async function inspect(raw,label){const state=await raw.evaluate(`(()=>{const e=__PIXEL_ENGINE__;return {screen:e.game.ui.screen,stage:e.game.story.stage,fullscreen:!!document.fullscreenElement,activation:{active:navigator.userActivation.isActive,ever:navigator.userActivation.hasBeenActive},audio:{unlocked:e.audio.unlocked,state:e.audio.context?.state,time:e.audio.context?.currentTime},errors:e.errors,gpuErrors:e.renderer.gpuErrors}})()`);assert.equal(state.activation.active,false,label+' transient activation');assert.equal(state.activation.ever,false,label+' trusted activation');assert.equal(state.errors.length,0);assert.equal(state.gpuErrors.length,0);report.checks.push({label,...state});return state;}
  async function pad(raw,index){await raw.evaluate(`(()=>{const p=__couchPad;p.timestamp++;p.buttons[${index}]={pressed:true,touched:true,value:1};__PIXEL_ENGINE__.step(3);p.buttons[${index}]={pressed:false,touched:false,value:0};__PIXEL_ENGINE__.step(3)})()`);}
  async function choose(raw,action){for(let i=0;i<35;i++){const state=await raw.evaluate(`(()=>{const u=__PIXEL_ENGINE__.game.ui;return {at:u.selected,to:u.controls.findIndex(c=>c.action===${JSON.stringify(action)})}})()`);assert(state.to>=0,'Menu action '+action);if(state.at===state.to){await pad(raw,0);return;}await pad(raw,13);}throw Error('Unable to select '+action);}
  try {
    launch=await launchCouch({profile,headless,executable,setupContext:strictPadSetup});
    report.browser=await launch.browser.version();report.executable=launch.executablePath;
    const system=await launch.cdp.send('SystemInfo.getInfo');report.gpuDevices=system.gpu.devices;
    let raw=await rawClient(launch.context,launch.page);await waitRaw(raw,'!!window.__PIXEL_ENGINE__?.game?.ready');await raw.evaluate('__PIXEL_ENGINE__.manual=true');
    report.adapters=await raw.evaluate('__couchAdapters');
    await inspect(raw,'fresh title');
    for(const menu of ['title','options']){
      // Chromium intentionally blocks automatic re-entry for five real seconds
      // after fullscreen exits. Respect that browser cooldown rather than
      // manufacturing a trusted gesture in the verification harness.
      if(menu==='options'){await new Promise(resolve=>setTimeout(resolve,5500));await choose(raw,'options');}
      await choose(raw,'fullscreen');await waitRaw(raw,'!!document.fullscreenElement',5000);assert((await inspect(raw,menu+' fullscreen entered')).fullscreen);
      await choose(raw,'fullscreen');await waitRaw(raw,'!document.fullscreenElement',5000);assert(!(await inspect(raw,menu+' fullscreen exited')).fullscreen);
    }
    await pad(raw,1);await choose(raw,'new');await choose(raw,'begin');await pad(raw,3);
    await new Promise(resolve=>setTimeout(resolve,300));
    const played=await inspect(raw,'first objective completed with sound');assert.equal(played.stage,1);assert.equal(played.audio.state,'running');assert(played.audio.time>0);
    const saved=await raw.evaluate("localStorage.getItem('signal-debt-save-v1')");assert.equal(JSON.parse(saved).story.stage,1);
    await raw.evaluate('__PIXEL_ENGINE__.manual=false');await new Promise(resolve=>setTimeout(resolve,250));await raw.evaluate('__PIXEL_ENGINE__.manual=true');
    const png=await raw.cdp.send('Page.captureScreenshot',{format:'png'});const screenshot=path.join(path.dirname(reportPath),'couch-controller.png');fs.writeFileSync(screenshot,Buffer.from(png.data,'base64'));report.screenshot=path.basename(screenshot);
    // A different origin gets no automatic-fullscreen grant. The local server
    // also rejects its Host header; the error document still has that origin.
    const other=await launch.context.newPage();await other.goto(`http://localhost:${PORT}/`);const otherRaw=await rawClient(launch.context,other);
    report.otherOrigin=await otherRaw.evaluate(`(async()=>{let error=null;try{await document.documentElement.requestFullscreen()}catch(e){error=e.name}return {origin:location.origin,fullscreen:!!document.fullscreenElement,error,activation:navigator.userActivation.hasBeenActive}})()`);
    assert.equal(report.otherOrigin.fullscreen,false);assert.equal(report.otherOrigin.activation,false);await other.close();
    await launch.page.close();await launch.closed;launch=null;report.firstWindowCloseStoppedServer=true;
    // Reopen the exact same profile and origin. The stored objective must survive.
    launch=await launchCouch({profile,headless,executable,setupContext:strictPadSetup});raw=await rawClient(launch.context,launch.page);
    await waitRaw(raw,'!!window.__PIXEL_ENGINE__?.game?.ready');await raw.evaluate('__PIXEL_ENGINE__.manual=true');
    assert.equal(await raw.evaluate("localStorage.getItem('signal-debt-save-v1')"),saved);
    await choose(raw,'continue');const continued=await inspect(raw,'persisted profile continues objective');assert.equal(continued.stage,1);report.profileCheckpointPersisted=true;
    await launch.page.close();await launch.closed;launch=null;
    const probe=await createLocalServer();await new Promise(resolve=>probe.close(resolve));report.portReleasedAfterWindowClose=true;
    report.ok=true;
  } catch(error){report.ok=false;report.errors.push(error.message);throw error;}
  finally{await launch?.close();report.finishedAt=new Date().toISOString();save();await fsp.rm(profile,{recursive:true,force:true,maxRetries:5,retryDelay:100});}
  console.log(JSON.stringify({ok:report.ok,browser:report.browser,adapters:report.adapters,checks:report.checks.map(c=>({label:c.label,fullscreen:c.fullscreen,audio:c.audio.state,activation:c.activation})),profileCheckpointPersisted:report.profileCheckpointPersisted,portReleasedAfterWindowClose:report.portReleasedAfterWindowClose,report:reportPath},null,2));
  return report;
}

async function delegateToWindows(argv) {
  const windowsNode='/mnt/c/Program Files/nodejs/node.exe';
  const windowsChrome='/mnt/c/Program Files/Google/Chrome/Application/chrome.exe';
  const chosen=argv.includes('--browser')?argv[argv.indexOf('--browser')+1]:null;
  const isWsl=process.platform==='linux'&&(process.env.WSL_DISTRO_NAME||/microsoft/i.test(fs.readFileSync('/proc/sys/kernel/osrelease','utf8')));
  if(!isWsl||argv.includes('--native-child')||(chosen&&!chosen.toLowerCase().endsWith('.exe'))||!fs.existsSync(windowsNode)||!fs.existsSync(windowsChrome))return false;
  const win=file=>execFileSync('wslpath',['-w',file],{encoding:'utf8'}).trim();
  const forwarded=[...argv];
  if(forwarded.includes('--report')){const i=forwarded.indexOf('--report')+1;forwarded[i]=win(path.resolve(forwarded[i]));}
  if(chosen?.startsWith('/'))forwarded[forwarded.indexOf('--browser')+1]=win(chosen);
  console.log('Signal Debt couch launcher: using Windows Chrome for native WebGPU.');
  const child=spawn(windowsNode,[win(__filename),...forwarded,'--native-child'],{stdio:['pipe','inherit','inherit']});
  child.stdin.on('error',()=>{}); // The window can close while Ctrl+C is in flight.
  const stop=()=>{if(!child.stdin.destroyed){child.stdin.write('shutdown\n');child.stdin.end();}};
  process.once('SIGINT',stop);process.once('SIGTERM',stop);
  const [code]=await once(child,'exit');process.removeListener('SIGINT',stop);process.removeListener('SIGTERM',stop);process.exitCode=code??1;return true;
}

async function main(argv=process.argv.slice(2)) {
  if(argv.includes('--help')){console.log('Signal Debt couch launcher\n  node scripts/couch.cjs\n  node scripts/couch.cjs --verify --headless\nOptional: --browser PATH, --report PATH (verification only).\nServes only 127.0.0.1:8127. Checkpoints persist in a dedicated SignalDebt/CouchProfile.\nClose the game window or press Ctrl+C to stop the browser and server.');return;}
  const permitted=new Set(['--verify','--headless','--native-child','--browser','--report']);
  for(let i=0;i<argv.length;i++){if(!permitted.has(argv[i]))throw Error('Unknown option: '+argv[i]);if(['--browser','--report'].includes(argv[i])&&!argv[++i])throw Error('Missing option value.');}
  if(argv.includes('--headless')&&!argv.includes('--verify'))throw Error('--headless is for --verify; normal couch play opens a window.');
  if(await delegateToWindows(argv))return;
  const value=key=>argv.includes(key)?argv[argv.indexOf(key)+1]:undefined;
  if(argv.includes('--verify'))return verifyCouch({headless:argv.includes('--headless'),executable:value('--browser'),reportPath:value('--report')?path.resolve(value('--report')):undefined});
  const launch=await launchCouch({executable:value('--browser')});
  console.log(`Signal Debt is open at ${ORIGIN}\nCheckpoint profile: ${launch.profile}\nClose its window to stop. Your normal browser profile is not used.`);
  const stop=()=>{launch.close();};const input=chunk=>{if(String(chunk).includes('shutdown'))stop();};
  process.once('SIGINT',stop);process.once('SIGTERM',stop);process.stdin.on('data',input);
  await launch.closed;process.stdin.removeListener('data',input);process.stdin.pause();process.removeListener('SIGINT',stop);process.removeListener('SIGTERM',stop);
}
module.exports={PORT,ORIGIN,ROOT,createLocalServer,profilePath,chromePath,launchCouch,verifyCouch,inside};
if(require.main===module)main().catch(error=>{console.error('Signal Debt couch launcher: '+error.message);process.exitCode=1;});
