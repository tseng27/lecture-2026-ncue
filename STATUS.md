# STATUS（最後更新：2026-11-25 23:15 Asia/Taipei，Claude）

## 已完成
- 2026-11-25 21:37：主題 02 新增 R003（Facebook 貼文，因無法讀取內文而用中性標籤）；Instagram 三個帳號改為講者提供的名稱，CONFIG.links.instagram 改為個人帳號 @art27tw（Grok）。尚未推送。
- 2026-11-25 21:35：關於我頁重排——T04 改全寬名言橫幅，公仔牆改全寬 5＋4；底部延伸連結改為 YouTube／Instagram／Facebook 三組，並填入 CONFIG.links／CONFIG.social（Grok）。尚未推送。
- 2026-11-25 21:06：自由探索「關於我」（#home）放入 9 張 AI 公仔拍立得（講者提供，已標示為 AI 生成形象圖）；同頁標題、三張身分卡、區塊標題與四個標籤依講者原文更新（Grok）。已推送。
- 2026-11-25 20:55：封面講者資訊改為「曾國正／國立屏北高級中學　線上講座／國立彰化師範大學」（Grok）。
- 2026-11-25 20:50：視覺改為「拼貼作品集」風格（含封面版型），封面中間為講者海報 img/cover-me.jpg（Artifact v5）。立體黏土版可從 git 509514e 取回。
- 下一位接手：Grok（請讀 GROK_START.md）。
- v2 網站：講座模式 20 頁（110/120）＋自由探索 17 個視圖，依 ChatGPT 資料包 v1.0 撰寫。
- 私人預覽已發布（Claude Artifact）。
- 交接包：AGENTS.md、CLAUDE.md、README.md、STATUS.md、HANDOFF_LOG.md、tools/smoke-test.js。

## 進行中／等待
- [x] GitHub repo：https://github.com/tseng27/lecture-2026-ncue （main 為主要版本）
- [x] GitHub Pages 已開啟（2026-11-25 07:01 部署成功）：https://tseng27.github.io/lecture-2026-ncue/
- 備份：Google Drive「1-3 講座資料 > 20261127 彰師大講座_互動網站交接」（不會自動同步）
- [ ] 「關於我」全寬重排與社群連結：待講者確認後推送 GitHub Pages

## 待補素材（詳見 待補素材清單.md）
- P0：已授權的學生感官轉譯案例、MIA 定稿版本、現場影片離線檔。
- P1：本人真實照片與課堂照仍待補（關於我已有標示清楚的 AI 公仔形象圖，不是課堂照）。工具現版網址。主題 03 作品圖與年代改連作品集網站；ELARA 五人官方形象圖已放入（2026-11-25 23:15）。IG／YouTube／Facebook 網址已由講者提供並填入。

## 已知限制
- 影音與學生作品仍是「待補」卡片；主題 03 作品圖直接讀取作品集網站，若該網站改圖檔名稱，需同步更新 SERIES。
- 投票、練習輸入只存在該台瀏覽器，不會共享。
