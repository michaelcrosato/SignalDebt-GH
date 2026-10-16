// Isolated pacing experiment. No engine or game source is patched, and the
// platform performance.now clock is never replaced. Native RAF IDs/cancellation
// remain unchanged; only the callback's timestamp can be bridged to wall time.
const {chromium}=require('playwright-core');
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const args=process.argv.slice(2),value=(key,fallback)=>args.includes(key)?args[args.indexOf(key)+1]:fallback;
const output=path.resolve(value('--out','docs/raf-clock-diagnostic.json'));
const root=path.resolve(__dirname,'..'),files=['index.html','game.js','city-game.js','world.js','models.js','equipment.js','navigation.js','missions.js','vehicles.js','actors.js','audio.js','persistence.js','ui.js','style.css','pixel-engine.js','packs/kenney-nature.json'];
const hashes=()=>Object.fromEntries(files.map(f=>[f,crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex')]));
(async()=>{
 const report={startedAt:new Date().toISOString(),purpose:'Compare native RAF timestamps with real wall time, then test callback timestamp bridge. This is an experiment, not a shipping launcher setting.',browserFlags:['--disable-frame-rate-limit','--autoplay-policy=no-user-gesture-required'],sourceHashes:hashes(),rows:[]};
 const browser=await chromium.launch({executablePath:value('--browser','C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'),headless:!args.includes('--headed'),args:report.browserFlags});
 try{
  report.browser=await browser.version();
  for(const bridge of [false,true]){
   const context=await browser.newContext({viewport:{width:1920,height:1080}});
   try{
    await context.addInitScript(({bridge})=>{
     const nativeRaf=window.requestAnimationFrame.bind(window);
     window.__rafDiagnostic={record:false,samples:[],bridge};
     window.requestAnimationFrame=callback=>nativeRaf(timestamp=>{
      const now=performance.now();
      if(window.__rafDiagnostic.record)window.__rafDiagnostic.samples.push([timestamp,now]);
      callback(bridge?now:timestamp);
     });
    },{bridge});
    const page=await context.newPage(),cdp=await context.newCDPSession(page);await cdp.send('Performance.enable');
    await page.goto('http://localhost:8080/');await page.waitForFunction(()=>window.__PIXEL_ENGINE__?.game?.ready);
    const initial=await page.evaluate(async()=>{const e=__PIXEL_ENGINE__,g=e.game;await e.audio.unlock();g.action('new');g.action('begin');g.ui.hide();g.story.active=false;e.timeScale=1;e.manual=false;const a=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});return {adapter:{vendor:a.info.vendor,architecture:a.info.architecture,isFallbackAdapter:a.info.isFallbackAdapter},frameCap:e.maxFps,resolution:e.renderer.resolution};});
    await page.waitForTimeout(1800);
    const before=Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x=>[x.name,x.value]));
    const data=await page.evaluate(async()=>{
     const e=__PIXEL_ENGINE__,g=e.game,d=__rafDiagnostic,render=[],fps=[];
     const start=performance.now(),startSteps=e.physics.steps,startPlay=g.playTime,startGameTime=e.time;
     d.samples=[];d.record=true;const off=e.renderer.onBeforeRender(()=>render.push(performance.now()));
     const sample=setInterval(()=>fps.push(e.fps),250);await new Promise(r=>setTimeout(r,10000));const elapsed=(performance.now()-start)/1000;
     d.record=false;off();clearInterval(sample);
     const summary=values=>{const s=[...values].sort((a,b)=>a-b),q=p=>s[Math.min(s.length-1,Math.floor(s.length*p))]??null;return {count:s.length,min:s[0],median:q(.5),p95:q(.95),max:s.at(-1)}};
     const delta=(values)=>values.slice(1).map((x,i)=>x-values[i]);
     const stamps=d.samples.map(x=>x[0]),wall=d.samples.map(x=>x[1]);
     return {elapsedSeconds:elapsed,renderedFrames:render.length,renderedFps:render.length/elapsed,renderGapMs:summary(delta(render)),engineFps:summary(fps),rafCallbacks:stamps.length,rafStampDeltasMs:summary(delta(stamps)),rafWallDeltasMs:summary(delta(wall)),stampLagMs:summary(d.samples.map(x=>x[1]-x[0])),repeatedStamps:delta(stamps).filter(x=>Math.abs(x)<.001).length,backwardStamps:delta(stamps).filter(x=>x<-.001).length,physicsSteps:e.physics.steps-startSteps,physicsStepsPerSecond:(e.physics.steps-startSteps)/elapsed,gameplayTimeRate:(g.playTime-startPlay)/elapsed,engineTimeRate:(e.time-startGameTime)/elapsed,physicsStepMs:e.physics.stepMs,audio:e.audio.context?.state,frameCap:e.maxFps,manual:e.manual,errors:[...e.errors],gpuErrors:[...e.renderer.gpuErrors],firstRafSamples:d.samples.slice(0,30)};
    });
    const after=Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x=>[x.name,x.value]));
    data.cpu={taskMs:(after.TaskDuration-before.TaskDuration)*1000,scriptMs:(after.ScriptDuration-before.ScriptDuration)*1000};
    report.rows.push({mode:bridge?'performance-now-bridge':'native-timestamps',...initial,...data});
    console.log(JSON.stringify(report.rows.at(-1)));
   }finally{await context.close();}
  }
 }finally{report.finishedAt=new Date().toISOString();report.currentHashes=hashes();report.runtimeHashesMatch=Object.entries(report.sourceHashes).every(([file,hash])=>report.currentHashes[file]===hash);fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
