import { Engine, PALETTE, withUrlOptions } from './pixel-engine.js';
import { SignalDebt } from './city-game.js';
try {
  await Engine.start(new SignalDebt(),withUrlOptions({container:document.getElementById('app'),aspect:'fill',resolution:{width:640,height:360},camera:{preset:'third',distance:23,fov:55,stiffness:7},background:PALETTE.sky,settings:{button:false,key:false},touch:false,debugKeys:false,quality:'medium',seed:17}));
} catch(error) {
  console.error(error);
  const boot=document.getElementById('boot');
  if(boot){document.getElementById('boot-status').textContent='This city needs WebGPU. Open in a current Chrome or Edge with hardware acceleration enabled.';const p=document.createElement('p');p.style.cssText='max-width:35em;font-size:13px;opacity:.65;line-height:1.6';p.textContent=String(error.message??error);boot.append(p);}
}
