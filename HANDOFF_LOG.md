# HANDOFF_LOG｜工作交接紀錄

新紀錄加在最上方。格式見 AGENTS.md 第 8 節。任何 AI 接手前先讀最上方三筆；結束前新增一筆。

## 2026-11-25 20:20（Asia/Taipei）｜Claude
- 任務：講者傳了畫廊／美術館網站截圖，說「我喜歡這些風格幫我修改」。
- 改了什麼：index.html 的 <style> 全面改為畫廊風格（石白牆面底色、Cormorant Garamond＋Noto Serif TC 細體標題、Inter 小字間距標籤、細線取代色塊、作品以掛畫框呈現、深色模式為黑盒放映室）；V.cover 改為左圖右文的展廳式封面。內容、講座流程、規則都沒改。
- 驗證：tools/smoke-test.js 11 項 PASS；桌機淺色／深色截圖檢查。
- 沒做完／阻礙：無。
- 下一步建議：講者確認風格；收到真實作品圖後，作品會以畫框呈現。
- 是否已同步 artifact-source.html／已發布：是，Artifact v3、GitHub main。

## 2026-11-25 07:05（Asia/Taipei）｜Claude
- 任務：講者要求「放到 GitHub」，並把交接紀錄存到 Google Drive。
- 改了什麼：建立 repo 內容（index.html、img、交接包、.nojekyll）推到 tseng27/lecture-2026-ncue 的 main。Drive 備份：「1-3 講座資料 > 20261127 彰師大講座_互動網站交接」。
- 驗證：push 成功；smoke-test 11 項 PASS（內容與前次相同）。
- 沒做完／阻礙：GitHub Pages 需講者在 repo 的 Settings → Pages 手動開啟（Claude 的環境無權限呼叫 Pages API）。
- 下一步建議：Pages 開啟後確認 https://tseng27.github.io/lecture-2026-ncue/ 可開；之後以 GitHub 為主要版本，Drive 為備份。
- 是否已同步 artifact-source.html／已發布：是（Artifact v2）。

## 2026-11-25 07:00（Asia/Taipei）｜Claude
- 任務：講者要求「寫一個說明包讓 Codex、Grok 或其他 Agent 也能繼續執行，並寫能接續的工作交接紀錄」。
- 改了什麼：新增 AGENTS.md、CLAUDE.md、README.md、STATUS.md、HANDOFF_LOG.md、tools/smoke-test.js。網站本身未改。
- 驗證：node tools/smoke-test.js 全部 11 項 PASS。
- 沒做完／阻礙：GitHub repo 尚未建立（等講者）。
- 下一步建議：repo 建好後推上 main 並開 Pages；收到素材後填入 CONFIG 與作品卡。
- 是否已同步 artifact-source.html／已發布：是（網站內容與 Artifact v2 相同）。

## 2026-11-24 晚｜Claude
- 任務：依 ChatGPT 資料包做 2 小時互動網站，講者可上台操作，學員日後可重看。
- 改了什麼：index.html 全面改寫為 v2（講座模式＋自由探索）。日期確認為 2026-11-27。
- 驗證：Playwright 走完 20 頁；110 版 15/40/5/40/10、120 版 15/44/5/43/13；手機 400px 無水平捲動；無 console 錯誤。
- 是否已同步 artifact-source.html／已發布：是，Artifact v2。

## 2026-11-24 早｜Claude
- 任務：依講者第一份簡短大綱做 v1 網站（110 分鐘）。已被 v2 取代。
