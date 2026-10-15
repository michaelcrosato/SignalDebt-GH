import test from 'node:test';
import assert from 'node:assert/strict';
import { MISSIONS } from '../missions.js';
import { validateSave, readSave, writeSave, SAVE_KEY, VEHICLE_IDS } from '../persistence.js';

const fixture = () => ({
  version: 1,
  story: { mission: 0, stage: 1, active: true, finished: false, progress: 0, stageTime: 0, wave: 0, completed: 0, approach: 'jam', history: [{ mission: 0, stage: 0, label: 'Meet Bo outside the garage', elapsed: 0 }] },
  health: 100, ammo: 0, reserve: 0, cash: 0, playTime: 0, player: [-18, 0, 18], ride: null,
  rides: VEHICLE_IDS.map((id, i) => ({ id, at: [i * 10, 1, 0], yaw: i, integrity: 100, upgraded: false })),
  cacheTaken: [], interceptPosition: null,
});
const memoryStorage = () => { const map = new Map(); return { getItem: key => map.get(key) ?? null, setItem: (key, value) => map.set(key, String(value)), map }; };

test('roundtrip preserves zero cash, empty ammunition and independent nested data', () => {
  const data = fixture(), storage = memoryStorage();
  assert.equal(writeSave(data, storage), true);
  const loaded = readSave(storage); assert.deepEqual(loaded, data);
  assert.equal(loaded.cash, 0); assert.equal(loaded.ammo, 0); assert.equal(loaded.reserve, 0);
  loaded.player[0] = 25; loaded.rides[0].at[0] = 80; loaded.story.history[0].label = 'changed';
  assert.deepEqual(readSave(storage), data);
  assert.equal(data.player[0], -18); assert.equal(data.rides[0].at[0], 0); assert.equal(data.story.history[0].label, 'Meet Bo outside the garage');
});

test('validated clones discard unsupported fields without mutating their input', () => {
  const data = fixture(); data.unknown = { value: 12 }; data.story.current = 'injected'; data.rides[0].power = 999;
  const result = validateSave(data); assert(result); assert.equal(result.unknown, undefined); assert.equal(result.story.current, undefined); assert.equal(result.rides[0].power, undefined);
  result.story.history[0].label = 'different'; assert.notEqual(result.story.history[0].label, data.story.history[0].label);
  delete data.interceptPosition; assert.equal(validateSave(data).interceptPosition, null);
});

test('every real mission accepts its active stages and its completed boundary', () => {
  for (let mission = 0; mission < MISSIONS.length; mission++) {
    for (let stage = 0; stage < MISSIONS[mission].stages.length; stage++) {
      const data = fixture(); Object.assign(data.story, { mission, stage, completed: mission }); assert(validateSave(data), `active ${mission}/${stage}`);
    }
    const data = fixture(); Object.assign(data.story, { mission, stage: MISSIONS[mission].stages.length, active: false, finished: mission === 3, completed: mission + 1 });
    const saved = validateSave(data); assert(saved, `completed ${mission}`); assert.equal(saved.story.stage, MISSIONS[mission].stages.length); assert.equal(saved.story.active, false);
    data.story.active = true; assert.equal(validateSave(data), null, 'completed stage must not enter a missing objective');
  }
});

test('finished and completed flags cannot manufacture completion or leave a terminal job active', () => {
  for (const change of [
    story => { story.finished = true; },
    story => { story.stage = MISSIONS[0].stages.length; story.active = false; story.completed = 0; },
    story => { story.mission = 3; story.stage = MISSIONS[3].stages.length; story.active = false; story.completed = 4; story.finished = false; },
    story => { story.mission = 3; story.stage = MISSIONS[3].stages.length; story.active = false; story.completed = 3; story.finished = true; },
  ]) { const data = fixture(); change(data.story); assert.equal(validateSave(data), null); }
});

test('invalid numeric fields, coordinates and enum values reject the checkpoint', () => {
  const cases = [
    d => { d.version = 2; }, d => { d.health = Infinity; }, d => { d.health = -1; }, d => { d.health = 101; },
    d => { d.ammo = 13; }, d => { d.ammo = 0.5; }, d => { d.reserve = -1; }, d => { d.cash = '0'; }, d => { d.cash = NaN; }, d => { d.playTime = -1; },
    d => { d.player[0] = 9999; }, d => { d.player[1] = -20; }, d => { d.player[2] = Infinity; }, d => { d.player = [0, 0]; },
    d => { d.story.mission = 4; }, d => { d.story.stage = MISSIONS[0].stages.length + 1; }, d => { d.story.stage = -1; }, d => { d.story.stage = 0.5; },
    d => { d.story.active = 'false'; }, d => { d.story.progress = -1; }, d => { d.story.stageTime = NaN; }, d => { d.story.wave = -1; }, d => { d.story.completed = 5; }, d => { d.story.approach = 'teleport'; },
    d => { d.ride = 'unknown'; }, d => { d.rides[0].id = 'unknown'; }, d => { d.rides[1].id = d.rides[0].id; }, d => { d.rides.pop(); },
    d => { d.rides[0].yaw = Infinity; }, d => { d.rides[0].integrity = 101; }, d => { d.rides[0].upgraded = 1; },
    d => { d.cacheTaken = [0, 0]; }, d => { d.cacheTaken = [6]; }, d => { d.cacheTaken = [-1]; },
    d => { d.interceptPosition = { x: 0, z: 0 }; }, d => { d.interceptPosition = { x: 0, y: 0, z: Infinity }; },
    d => { d.story.history[0].elapsed = 1; }, d => { d.story.history[0].stage = 900; }, d => { d.story.history[0].label = {}; },
  ];
  for (const [index, change] of cases.entries()) { const data = fixture(); change(data); assert.equal(validateSave(data), null, `malformed case ${index}`); }
});

test('sparse arrays, inherited fields, getters and prototype-bearing records are rejected safely', () => {
  for (const change of [
    d => { d.player = Array(3); }, d => { delete d.rides[2]; }, d => { d.cacheTaken = Array(2); }, d => { delete d.story.history[0]; },
    d => { d.player.extra = 1; }, d => { Object.setPrototypeOf(d.story, { mission: 0 }); }, d => { delete d.story.stage; },
    d => { d.story = JSON.parse('{"__proto__":{"polluted":true}}'); },
    d => { Object.defineProperty(d, 'health', { get() { throw Error('getter must not run'); }, enumerable: true }); },
    d => { Object.defineProperty(d.rides[0].at, '0', { get() { throw Error('array getter must not run'); }, enumerable: true }); },
  ]) { const data = fixture(); change(data); assert.equal(validateSave(data), null); }
  assert.equal({}.polluted, undefined);
  const data = fixture(); const inherited = Object.create(data); assert.equal(validateSave(inherited), null);
  const proxy = new Proxy({}, { getPrototypeOf() { throw Error('hostile proxy'); } }); assert.equal(validateSave(proxy), null);
});

test('storage corruption and access failures do not throw or overwrite a good save', () => {
  const storage = memoryStorage(), data = fixture(); assert(writeSave(data, storage)); const previous = storage.getItem(SAVE_KEY);
  const bad = fixture(); bad.player = [Infinity, 0, 0]; assert.equal(writeSave(bad, storage), false); assert.equal(storage.getItem(SAVE_KEY), previous);
  for (const text of ['{broken', 'null', '[]', '{}', JSON.stringify({ version: 9 }), 'x'.repeat(1_000_001)]) { storage.setItem(SAVE_KEY, text); assert.equal(readSave(storage), null); }
  const unavailable = { getItem() { throw Error('SecurityError'); }, setItem() { throw Error('QuotaExceededError'); } };
  assert.equal(readSave(unavailable), null); assert.equal(writeSave(data, unavailable), false);
  assert.equal(readSave(null), null); assert.equal(writeSave(data, null), false);
  assert.equal(readSave({}), null); assert.equal(writeSave(data, {}), false);
});

test('custom storage key and missing browser global are supported', () => {
  const storage = memoryStorage(), data = fixture(); assert.equal(writeSave(data, storage, 'custom-checkpoint'), true); assert.deepEqual(readSave(storage, 'custom-checkpoint'), data); assert.equal(readSave(storage), null);
  assert.doesNotThrow(() => readSave()); assert.doesNotThrow(() => writeSave(data));
});

test('courier recovery coordinates, upgraded ride and evidence caches roundtrip', () => {
  const data = fixture(); data.playTime = 75; data.ride = 'cormorant'; data.player = [22, 1.1, -80]; data.cash = 1200; data.ammo = 7; data.reserve = 42;
  Object.assign(data.story, { mission: 2, stage: 3, completed: 2, approach: 'diversion', history: [{ mission: 2, stage: 2, label: 'Secure the access case', elapsed: 60 }] });
  data.rides[1].upgraded = true; data.rides[1].at = [22, 1.1, -80]; data.cacheTaken = [0, 5]; data.interceptPosition = { x: 81, y: 1, z: -203 };
  const storage = memoryStorage(); assert(writeSave(data, storage)); assert.deepEqual(readSave(storage), data);
});

test('a denied localStorage getter is not touched at import and fails gracefully when called', async () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage'); let reads = 0;
  try {
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, get() { reads++; throw Error('Storage denied'); } });
    const persistence = await import('../persistence.js?storage-unavailable-test'); assert.equal(reads, 0);
    assert.equal(persistence.readSave(), null); assert.equal(persistence.writeSave(fixture()), false); assert.equal(reads, 2);
  } finally {
    if (original) Object.defineProperty(globalThis, 'localStorage', original); else delete globalThis.localStorage;
  }
});
