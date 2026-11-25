// 用法：node tools/smoke-test.js   （需要 Node 與 playwright：npm i -D playwright && npx playwright install chromium）
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const file = 'file://' + path.resolve(__dirname, '..', 'index.html');
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/net::ERR_(TUNNEL|NAME|INTERNET|CONNECTION|PROXY)/.test(m.text())) errs.push(m.text()); });
  let fail = 0; const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
  await p.goto(file + '#talk-01');
  for (let i = 0; i < 20; i++) { await p.keyboard.press('ArrowRight'); await p.waitForTimeout(50); }
  ok(await p.evaluate(() => location.hash) === '#talk-21', '講座模式可走到第 21 頁');
  await p.goto(file + '#lecture');
  const seg = async () => p.evaluate(() => [...document.querySelectorAll('.ag-row.segh .m')].map(x => x.textContent).join(','));
  await p.click('[data-tlen="110"]'); ok(await seg() === "15′,48′,5′,40′,10′", '110 版五段 15/48/5/40/10');
  await p.click('[data-tlen="120"]'); ok(await seg() === "15′,52′,5′,43′,13′", '120 版五段 15/52/5/43/13');
  ok((await p.textContent('body')).includes('你的人生'), '結語原句存在');
  await p.setViewportSize({ width: 400, height: 850 });
  for (const h of ['talk-07', 'cases', 'elara', 'learning', 'aiprep', 'sensory', 'resources']) {
    await p.goto(file + '#' + h); await p.waitForTimeout(200);
    ok(await p.evaluate(() => document.documentElement.scrollWidth <= 400), `手機寬度無水平捲動：${h}`);
  }
  ok(errs.length === 0, 'console 無錯誤' + (errs.length ? '：' + errs.join(' | ') : ''));
  await b.close(); process.exit(fail ? 1 : 0);
})();
