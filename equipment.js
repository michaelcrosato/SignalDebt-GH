// Library-first review found no modern radio equipment or sidearm in LIBRARY.md.
// Original models as data; no external assets or engine modifications.
import { model, buildModel, setLookLayer } from './pixel-engine.js';
export const SIGNAL_CASE=model({
 id:'signal-evidence-case',about:'Sealed paper evidence case with a hard shell, clasp and carrying handle',tags:['evidence','case','signal'],
 palette:{shell:'teal',edge:'night',metal:'sand'},
 parts:[{box:[.72,.32,.42],at:[0,.2,0],c:'shell'},{box:[.76,.08,.46],at:[0,.05,0],c:'edge'},{box:[.76,.08,.46],at:[0,.36,0],c:'edge'},{box:[.18,.12,.06],at:[0,.28,.24],c:'metal'},{box:[.36,.07,.12],at:[0,.49,0],c:'metal'},{box:[.07,.13,.12],at:[-.145,.43,0],c:'metal'},{box:[.07,.13,.12],at:[.145,.43,0],c:'metal'}]
});
export const RELAY=model({
 id:'district-relay-cabinet',about:'Street communications cabinet with display, vents and a rooftop aerial',tags:['signal','terminal','cabinet'],
 palette:{body:'teal',foot:'sand',screen:'night',lamp:'cyan',mark:'sand'},
 parts:[{box:[1.5,.22,1],at:[0,.11,0],c:'foot'},{box:[1.25,1.9,.8],at:[0,1.13,0],c:'body'},{box:[1.38,.16,.9],at:[0,2.13,0],c:'foot'},
 {box:[.84,.55,.07],at:[0,1.48,.44],c:'screen'},{box:[.6,.09,.08],at:[0,1.59,.49],c:'lamp',glow:true},{box:[.4,.07,.08],at:[-.1,1.39,.49],c:'mark'},
 ...[.56,.74,.92].map(y=>({box:[.7,.07,.07],at:[0,y,.44],c:'screen'})),{box:[.1,.66,.1],at:[.44,2.47,0],c:'mark'},{box:[.5,.09,.09],at:[.44,2.75,0],c:'mark'}]
});
export const PULSE_EMITTER=model({
 id:'pulse-emitter',about:'Compact nonlethal security pulse emitter with a broad barrel and insulated grip',tags:['weapon','pulse','tool'],
 palette:{metal:'slate',grip:'night',coil:'cyan'},
 parts:[{box:[.14,.25,.14],at:[0,.125,-.08],c:'grip'},{box:[.19,.15,.45],at:[0,.31,.05],c:'metal'},{box:[.13,.08,.12],at:[0,.31,.31],c:'coil'}]
});
export function equipment(def){const object=buildModel(def).object;setLookLayer(object,'actors');return object;}
