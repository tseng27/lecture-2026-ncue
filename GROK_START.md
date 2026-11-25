# GROK_START｜給 Grok 的開場說明（可整段貼給 Grok）

你要接手一個講座互動網站：「AI 時代的藝術與教育：從創作突破到教學新模式」，講者曾國正，2026-11-27 在國立彰化師範大學，120 分鐘，對象是師培生、大學生、碩士班學生。

## 1. 先讀這些（公開 repo）
- Repo：https://github.com/tseng27/lecture-2026-ncue （main 是主要版本）
- 線上網站：https://tseng27.github.io/lecture-2026-ncue/
- 依序讀：
  1. https://raw.githubusercontent.com/tseng27/lecture-2026-ncue/main/AGENTS.md （共用規則，必讀）
  2. https://raw.githubusercontent.com/tseng27/lecture-2026-ncue/main/STATUS.md
  3. https://raw.githubusercontent.com/tseng27/lecture-2026-ncue/main/HANDOFF_LOG.md （只看最上方三筆）
  4. https://raw.githubusercontent.com/tseng27/lecture-2026-ncue/main/待補素材清單.md
  5. https://raw.githubusercontent.com/tseng27/lecture-2026-ncue/main/index.html （整個網站就這一個檔）

如果你讀不到 GitHub，請講者把 Google Drive「1-3 講座資料 > 20261127 彰師大講座_互動網站交接」裡的 `講座互動網站.zip` 上傳給你。

## 2. 目前狀態（2026-11-25 20:50）
- 視覺風格是「拼貼作品集」：膠帶紙片卡片、黑白拍立得、黃便條、紅色標題色塊、藍標籤、Caveat 手寫字、Oswald 數字。
- 封面是拼貼版型，中間是講者自己的海報 `img/cover-me.jpg`。**不要裁切、不要去色、不要換掉。**
- 兩種模式：講座模式 20 頁（#talk-01～#talk-20，110／120 分鐘切換），自由探索 17 個頁面。
- 連結都集中在 `<script>` 最上面的 `CONFIG`；網址空白時畫面會顯示「待補」。

## 3. 不能改的事
- 六個主題標題與結語原句「你的人生，就是你的藝術品」。
- 110 版五段 15/40/5/40/10、120 版 15/44/5/43/13。
- 不放學生姓名、成績、未授權影片；未查證的工具標「待核」；不用生成圖冒充作品；不用達利等他人畫作。
- 細節以 AGENTS.md 為準。

## 4. 你交付的方式
- 只改 `index.html`（和需要新增的 `img/` 圖片）。
- 改完請交出 **完整的 index.html**，不要只給片段，這樣講者可以直接上傳到 GitHub（repo 頁面 → Add file → Upload files → Commit），GitHub Pages 約 1 分鐘後更新。
- 同時寫一筆交接紀錄，格式照 AGENTS.md 第 8 節，放在 HANDOFF_LOG.md 最上方（也一起交給講者上傳）。
- 若能執行 Node：`node tools/smoke-test.js` 要 11 項全部 PASS。不能執行就在交接紀錄寫「未跑 smoke test」。

## 5. 建議的下一步（講者沒指定時）
1. 依待補素材清單，把講者給的作品圖放進作品卡與拍立得。
2. 補 CONFIG 裡的 IG、YouTube、工具網址。
3. 上台前用手機和投影機各走一次 20 頁。
