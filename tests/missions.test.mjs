import test from 'node:test';
import assert from 'node:assert/strict';
import {MISSIONS,Story} from '../missions.js';

test('all four chapters contain complete actionable objectives',()=>{
  assert.equal(MISSIONS.length,4);
  const types=new Set(['interact','reach','combat','enter','escape','defend','intercept','lift']);
  for(const mission of MISSIONS){
    assert(mission.title&&mission.brief&&mission.tagline);
    assert(mission.reward>0&&mission.stages.length>=8);
    for(const stage of mission.stages){
      assert(types.has(stage.type),`${mission.title}: unknown stage type`);
      assert(stage.label&&Array.isArray(stage.line)&&stage.line.length===2);
      if(stage.type!=='escape') for(const axis of ['x','y','z']) assert(Number.isFinite(stage.at[axis]),`${stage.label}: missing ${axis}`);
      if(stage.type==='combat') assert(stage.count>0);
      if(stage.type==='defend') assert(stage.seconds>0);
      if(stage.type==='interact') assert(stage.seconds>=0);
    }
  }
});

test('both courier recovery stages follow the actual interception site',()=>{
  const stages=MISSIONS[2].stages;
  const intercept=stages.findIndex(stage=>stage.type==='intercept');
  assert.equal(stages[intercept+1].type,'combat');
  assert.equal(stages[intercept+1].dynamic,true);
  assert.equal(stages[intercept+2].type,'interact');
  assert.equal(stages[intercept+2].dynamic,true);
});

test('roof objectives share the lift destination altitude and return demands street height',()=>{
  const stages=MISSIONS[3].stages;
  const lift=stages.findIndex(stage=>stage.type==='lift');
  assert.deepEqual(stages[lift].at,{x:195,y:8.2,z:-194});
  assert.equal(stages[lift+1].at.y,8.2);
  assert.equal(stages[lift+2].at.y,8.2);
  assert.equal(stages[lift+3].below,3);
});

test('a courier stop belongs to one story and cannot mutate another playthrough',()=>{
  const game={interceptPosition:{x:99,y:0,z:88},clearEnemies(){},spawnEnemies(){},say(){},checkpoint(){}};
  const first=new Story(game);first.mission=2;first.stage=2;first.enterStage();
  assert.deepEqual(first.current.at,{x:99,y:0,z:88});
  const second=new Story(game);second.mission=2;second.stage=2;
  assert.deepEqual(second.current.at,{x:216,y:0,z:-108});
  assert.deepEqual(MISSIONS[2].stages[2].at,{x:216,y:0,z:-108});
});

test('roof defense needs the player on the roof, not the street below',()=>{
  let checkpoints=0;
  const game={ui:{screen:null},position:{x:195,y:0,z:-192},enemies:[{health:100}],spawnEnemies(){},say(){},checkpoint(){checkpoints++;}};
  const story=new Story(game);story.mission=3;story.stage=6;story.active=true;
  story.tick(1);assert.equal(story.progress,0);
  assert.equal(checkpoints,0);
  game.position.y=8.2;story.tick(1);assert.equal(story.progress,1);assert.equal(checkpoints,1);
  story.tick(1);assert.equal(checkpoints,1,'arrival checkpoint is written once, before the defense');
});

test('lift checkpoint requires the static roof rather than a moving deck or airborne crossing',()=>{
 const game={ui:{screen:null},position:{x:195,y:8.22,z:-189},player:{hero:{grounded:true,groundCollider:17}},world:{lift:{body:{collider:()=>({handle:17})}}}};
 const story=new Story(game);story.mission=3;story.stage=4;story.active=true;let completed=0;story.advance=()=>completed++;
 story.tick(1);assert.equal(completed,0,'moving lift is not a safe saved landing');
 game.player.hero.groundCollider=18;game.player.hero.grounded=false;story.tick(1);assert.equal(completed,0,'passing above the roof is not arriving');
 game.player.hero.grounded=true;story.tick(1);assert.equal(completed,1,'standing on the static roof completes the ride');
});
