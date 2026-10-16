// Focused menu-parent and live-prompt regressions. The prompt-only fixture places
// Ren beside the loaner and disables its engine; no mission/checkpoint progress is assigned.
// npm run dev, then node tests/ui-navigation.mjs
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { launchGame } from './browser.mjs';
const out = '/tmp/signal-debt-ui-navigation'; mkdirSync(out, { recursive: true });
const report = { checks: [], errors: [], sourceHashes: {} };
const check = (label, value) => { report.checks.push({ label, value }); assert(value, label); };
try {
  for (const mode of ['keyboard', 'touch']) {
    const session = await launchGame('http://127.0.0.1:8080/', { mode, out: `${out}/${mode}` });
    const { page, driver } = session;
    const screen = async () => (await session.state()).screen;
    const back = async () => mode === 'touch' ? driver.choose('back') : driver.tap('Escape');
    const pause = async () => { if (mode === 'touch') { await page.locator('.sd-touch-top [aria-label="Pause game"]').tap(); await driver.step(3); } else await driver.tap('Escape'); };
    try {
      await driver.choose('options'); await back(); check(`${mode}: title → options → back returns to title`, await screen() === 'title');
      await driver.choose('new'); await driver.choose('begin');
      await pause(); await driver.choose('map'); await back(); check(`${mode}: pause → map → back returns to pause`, await screen() === 'pause');
      await driver.choose('resume'); check(`${mode}: Resume returns to gameplay`, await screen() === null);
      if (mode === 'touch') { await page.locator('.sd-touch-top [aria-label="Open district map"]').tap(); await driver.step(3); }
      else await driver.tap('KeyM');
      check(`${mode}: direct map opens from gameplay`, await screen() === 'map');
      await back(); check(`${mode}: direct map Back returns to gameplay, without stale Pause parent`, await screen() === null);
      await pause(); await driver.choose('options'); await back(); check(`${mode}: pause → options → back still returns to pause`, await screen() === 'pause');
      await driver.choose('resume'); check(`${mode}: subsequent Resume still returns to gameplay`, await screen() === null);
      if (mode === 'touch') {
        const keyboardTap = async key => { await page.keyboard.down(key); await driver.step(2); await page.keyboard.up(key); await driver.step(2); };
        const padInput = async () => { await driver.pad({ buttons: { 10: 1 } }); await driver.step(2); await driver.pad(); await driver.step(2); };
        const touchInput = async () => { await page.touchscreen.tap(80, 350); await driver.step(2); };
        const toast = () => page.evaluate(() => ({ mode: __PIXEL_ENGINE__.game.ui.mode, text: document.querySelector('.sd-toast').textContent, remaining: __PIXEL_ENGINE__.game.toastTime }));
        await driver.release();
        await page.evaluate(() => { const g = __PIXEL_ENGINE__.game, p = g.rides[0].position; g.player.teleport([p.x + 2, .3, p.z]); });
        await driver.step(3); await keyboardTap('f');
        check('Prompt fixture enters loaner through an actual keyboard interaction', (await session.state()).ride?.id === 'loaner');
        report.promptFixture = { scope: 'Display-only proof: player placed beside loaner; vehicle integrity later set to zero. No full campaign claim.', samples: [] };
        const expectToast = async (label, inputMode, wording) => { const value = await toast(); report.promptFixture.samples.push({ label, ...value }); check(label, value.mode === inputMode && value.remaining > 0 && value.text.includes(wording)); };
        await expectToast('Vehicle toast uses W/S after keyboard entry', 'keyboard', 'W accelerate · S brake / reverse');
        await padInput(); await expectToast('Existing vehicle toast switches to R2/L2', 'gamepad', 'R2 accelerate · L2 brake / reverse');
        await keyboardTap('z'); await expectToast('Existing vehicle toast switches back to W/S', 'keyboard', 'W accelerate · S brake / reverse');
        await touchInput(); await expectToast('Existing vehicle toast switches to GAS/BRAKE after actual touch', 'touch', 'GAS accelerate · BRAKE / reverse');
        await keyboardTap('z');
        await page.evaluate(() => { __PIXEL_ENGINE__.game.ride.integrity = 0; }); await driver.step(2);
        await expectToast('Recovery toast uses R in keyboard mode', 'keyboard', 'hold R to recover');
        // Stop the disabled-engine loop from replacing the toast: subsequent checks
        // must update the same already-visible message when the input mode changes.
        await page.evaluate(() => { __PIXEL_ENGINE__.game.ride.integrity = 100; });
        await padInput(); await expectToast('Recovery toast switches to the controller square glyph', 'gamepad', 'hold □ to recover');
        await keyboardTap('z'); await expectToast('Recovery toast switches back to R', 'keyboard', 'hold R to recover');
        await touchInput(); await expectToast('Recovery toast switches to RECOVER after actual touch', 'touch', 'hold RECOVER to recover');
      }
      report.errors.push(...session.errors); report.sourceHashes[mode] = session.sourceHashes;
    } finally { await session.close(); }
  }
  check('No browser errors', report.errors.length === 0);
} catch (error) { report.failure = error.stack; throw error; }
finally { writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2)); }
