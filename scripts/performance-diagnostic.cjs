// Native timing control: blank RAF vs game callbacks and CPU time; no game edits.
const {chromium}=require('playwright-core');
const fs=require('node:fs'),path=require('node:path');
const args=process.argv.slice(2),value=(key,fallback)=>args.includes(key)?args[args.indexOf(key)+1]:fallback;
const headless=!args.includes('--headed'),output=path.resolve(value('--out','docs/performance-diagnostic.json'));
(async()=>{
 const browser=await chromium.launch({executablePath:value('--browser',process.platform==='win32'?'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe':undefined),headless,args:['--window-size=1920,1080',...(args.includes('--unrestricted-raf')?['--disable-frame-rate-limit']:[])]});
 try{
  const page=await browser.newPage({viewport:{width:1920,height:1080}}),cdp=await page.context().newCDPSession(page);await cdp.send('Performance.enable');
  await page.route('**/__raf_probe',r=>r.fulfill({contentType:'text/html',body:'<!doctype html><html><head><title>Signal Debt timing control</title></head><body style="margin:0;background:#172d31;color:white">Frame timing control</body></html>'}));
  const rows=[];
  async function sample(name){
   await page.waitForTimeout(1000);const before=Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x=>[x.name,x.value]));
   const data=await page.evaluate(async()=>{const e=window.__PIXEL_ENGINE__,raf=[],render=[],start=performance.now();let active=true;const off=e?.renderer.onBeforeRender(()=>render.push(performance.now()));const frame=()=>{if(active){raf.push(performance.now());requestAnimationFrame(frame)}};requestAnimationFrame(frame);await new Promise(r=>setTimeout(r,6000));active=false;off?.();const elapsed=performance.now()-start;const q=arr=>{const gaps=arr.slice(1).map((x,i)=>x-arr[i]).sort((a,b)=>a-b);return {count:arr.length,fps:arr.length/(elapsed/1000),medianMs:gaps[Math.floor(gaps.length*.5)],p95Ms:gaps[Math.floor(gaps.length*.95)]}};return {elapsedSeconds:elapsed/1000,raf:q(raf),render:e?q(render):null,engineFps:e?.fps,frameCap:e?.maxFps,audio:e?.audio.context?.state,physicsMs:e?.physics.stepMs,visibility:document.visibilityState,focused:document.hasFocus()};});
   const after=Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x=>[x.name,x.value]));
   data.cpu={taskMs:(after.TaskDuration-before.TaskDuration)*1000,scriptMs:(after.ScriptDuration-before.ScriptDuration)*1000,layoutMs:(after.LayoutDuration-before.LayoutDuration)*1000,styleMs:(after.RecalcStyleDuration-before.RecalcStyleDuration)*1000};rows.push({name,...data});console.log(JSON.stringify(rows.at(-1)));
  }
  await page.goto('http://localhost:8080/__raf_probe');await sample('blank-page');
  await page.goto('http://localhost:8080/');await page.waitForFunction(()=>window.__PIXEL_ENGINE__?.game?.ready);await page.evaluate(async()=>{const e=__PIXEL_ENGINE__,g=e.game;await e.audio.unlock();g.action('new');g.action('begin');g.ui.hide();g.story.active=false;e.timeScale=1;e.manual=false;});await sample('game-audio-running-cap60');
  await page.evaluate(()=>__PIXEL_ENGINE__.settings.set({fps:0}));await sample('game-audio-running-display');
  fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify({browser:await browser.version(),headless,unrestrictedRaf:args.includes('--unrestricted-raf'),rows},null,2)+'\n');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
