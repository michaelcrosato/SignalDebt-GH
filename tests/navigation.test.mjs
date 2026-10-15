import test from 'node:test';
import assert from 'node:assert/strict';
import {segmentHitsRect,visible,roadRoute,distance,angleDelta} from '../navigation.js';
const building={x:0,z:0,w:10,d:8,h:8};

test('a building blocks crossing rays, including a diagonal across its corner',()=>{
  assert.equal(segmentHitsRect({x:-12,z:0},{x:12,z:0},building),true);
  assert.equal(segmentHitsRect({x:-8,z:-8},{x:8,z:8},building),true);
  assert.equal(segmentHitsRect({x:0,z:-12},{x:0,z:12},building),true);
});

test('parallel streets remain visible, with symmetric intersection results',()=>{
  for(const [a,b] of [[{x:-12,z:5},{x:12,z:5}],[{x:6,z:-12},{x:6,z:12}],[{x:-12,z:-10},{x:-7,z:-5}]]){
    assert.equal(segmentHitsRect(a,b,building),false);
    assert.equal(segmentHitsRect(b,a,building),false);
  }
});

test('clearance margin rejects a vehicle path that a point ray could pass',()=>{
  const a={x:-12,z:4.5},b={x:12,z:4.5};
  assert.equal(segmentHitsRect(a,b,building),false);
  assert.equal(segmentHitsRect(a,b,building,0.8),true);
});

test('sight handles eyes above low props and an occluding taller building',()=>{
  const a={x:-12,y:2,z:0},b={x:12,y:2,z:0};
  assert.equal(visible(a,b,[{...building,h:1}]),true);
  assert.equal(visible(a,b,[building]),false);
  assert.equal(visible({...a,y:10},{...b,y:10},[building]),true);
  assert.equal(visible(a,{...b,z:20},[{...building,z:-12}]),true);
});

test('line of sight breaks after going around a real rectangular corner',()=>{
  const pursuer={x:-12,y:1.6,z:0};
  assert.equal(visible(pursuer,{x:12,y:1.6,z:0},[building]),false);
  assert.equal(visible(pursuer,{x:12,y:1.6,z:18},[building]),true);
});

test('road routing connects different quadrants on axis-aligned connected roads',()=>{
  const roads={xs:[-216,-108,0,108,216],zs:[-216,-108,0,108,216]};
  const a={x:-207,z:-156},b={x:185,z:145};
  const route=roadRoute(a,b,roads);
  assert(route.length>=3);
  assert.deepEqual({x:route.at(-1).x,z:route.at(-1).z},b);
  for(let i=1;i<route.length;i++){
    const p=route[i-1],q=route[i];
    assert(p.x===q.x||p.z===q.z,'route must not cut diagonally through blocks');
    assert(distance(p,q)>2,'route should not emit duplicate waypoints');
    if(i<route.length-2) assert(roads.xs.includes(p.x)&&p.x===q.x||roads.zs.includes(p.z)&&p.z===q.z,'middle legs must follow road axes');
  }
});

test('road route preserves a destination already on a junction',()=>{
  const route=roadRoute({x:-10,z:-15},{x:108,z:108},{xs:[-108,0,108],zs:[-108,0,108]});
  assert.deepEqual(route.at(-1),{x:108,y:0,z:108});
  assert(route.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.z)));
});

test('steering angle uses the shorter turn across the wraparound',()=>{
  assert(Math.abs(angleDelta(Math.PI-0.1,-Math.PI+0.1)+0.2)<1e-10);
  assert(Math.abs(angleDelta(-Math.PI+0.1,Math.PI-0.1)-0.2)<1e-10);
});
