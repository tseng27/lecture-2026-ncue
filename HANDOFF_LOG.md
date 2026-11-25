# HANDOFF_LOG｜工作交接紀錄

新紀錄加在最上方。格式見 AGENTS.md 第 8 節。任何 AI 接手前先讀最上方三筆；結束前新增一筆。

## 2026-11-25 21:06（Asia/Taipei）｜Grok
- 任務：講者在自由探索「關於我」（#home）說「右邊的圖片用這幾張填滿」，並提供 9 張（去重後）自己的 AI 公仔形象圖；稍後再改同一頁的標題、三張身分卡、區塊標題與四個標籤文字（原文見講者訊息）。
- 改了什麼：
  - `img/about-01.jpg`～`about-09.jpg`：講者提供的 9 張彩色公仔圖，縮為高 800px、JPEG 品質 82。順序為畫家、Design Master、Art Pro、Sound Genius、Code Pro、Coffee Artist、Green Thumb、Lab Guru、Sky Captain（第 2、3 張原檔重複，只留一張）。
  - `index.html` 在 CONFIG 旁新增 `ABOUT_IMGS`；V.home 右側佔位卡改為 3×3 紙膠帶拍立得牆（彩色、`object-fit:contain`、不裁切、不套灰階），標題「AI 公仔實驗：如果我是…」，註記「AI 生成形象圖（講者本人提供）」；點擊開燈箱，Esc／背景／關閉鈕可關。樣式寫在 `<style>` 覆寫區塊末端。
  - 同一 V.home 文案（未改其他視圖；講座提示與主題 06 維持原句）：標題「我是曾國正」；紅字副標「一位在美術教學、藝術創作與生活中持續探索的終身學習者」；引言「我相信，美術不只是創作作品，更是觀察生活、表達自己，探索人生的方式。」；三卡改為美術教師／藝術創作者／終身學習者及對應說明（圓／方／三角圖示保留）；區塊標題改「從教學、創作到實踐」；四個標籤改為「AI 教學觀察所｜藝術教育研究與實踐」「AI 藝術與跨媒材創作」「ELARA 虛擬女團創作計畫」「數位教材與創作平台開發」。頁首標籤仍是「開場｜關於我與核心理念」。
- 驗證：`NODE_PATH=/workspace/pwtools/node_modules node tools/smoke-test.js` 11 項 PASS；#home 在 400px 寬 `scrollWidth=400`（無水平捲動）；燈箱可開、Esc 可關；桌機／手機截圖已目視檢查。
- 沒做完／阻礙：本人真實照片與課堂照仍未放入（右側是 AI 公仔，已標示生成圖，不冒充課堂照）。作品卡、IG／YouTube 仍待補。變更尚未推送，等講者確認。
- 下一步建議：講者確認預覽後再推 GitHub Pages；若要調公仔排列或標籤用語可再改 `ABOUT_IMGS`。
- 是否已同步 artifact-source.html／已發布：未同步 artifact-source.html；**待講者確認後推送**。

## 2026-11-25 20:55（Asia/Taipei）｜Grok
- 任務：講者要求封面（#talk-01）那行文字「改成 曾國正/國立屏北高級中學　線上講座/國立彰化師範大學」。
- 改了什麼：index.html CONFIG 新增 school:"國立屏北高級中學"、format:"線上講座"；V.cover 的 p.c-who 改為「曾國正／國立屏北高級中學　　線上講座／國立彰化師範大學」（原本的對象文字從這行移除，CONFIG.audience 保留未刪）。
- 驗證：node tools/smoke-test.js 11 項 PASS；桌機 1280×800 封面截圖檢查。
- 沒做完／阻礙：無。
- 下一步建議：見 GROK_START.md 第 5 節（作品圖、IG／YouTube 網址）。
- 是否已同步 artifact-source.html／已發布：未同步 artifact-source.html；已推送 GitHub main。

## 2026-11-25 20:50（Asia/Taipei）｜Claude
- 任務：講者傳 Pinterest 拼貼作品集參考圖，要求「連版型一起改」；看過預覽後選「換上線」，並指定封面中間放他的 IG 個人海報（不要裁切），之後交接給 Grok 繼續製作。
- 改了什麼：index.html 改為「拼貼作品集」風格：<head> 加 Caveat＋Oswald 字型；<style> 最後是拼貼覆寫區塊（膠帶紙片卡片、黑白拍立得、黃便條、紅螢光筆章節號）；V.cover 改成拼貼封面 section.collage（手寫標、藍標籤＋簡介、今日路線筆記本、黃便利貼、紅底大標）。封面中間是 img/cover-me.jpg（講者提供的完整海報，原比例、不裁切、不去色）。拍立得 .c-pola 在桌機隱藏。
- 驗證：tools/smoke-test.js 11 項 PASS；桌機與手機截圖檢查。
- 沒做完／阻礙：無。
- 下一步建議：見 GROK_START.md。
- 是否已同步 artifact-source.html／已發布：是，Artifact v5、GitHub main。

## 2026-11-25 20:35（Asia/Taipei）｜Claude
- 任務：講者覺得畫廊版（v3）「沒有風格、閱讀吃力」，要求提供三種風格選擇；之後改傳「立體黏土＋超現實」參考圖說「這一種做看看」，看過截圖後選「換上線」。
- 改了什麼：index.html 回到 v2 版面與字級為基礎，在 <style> 結尾加上「立體黏土・超現實」覆寫（暖白瓷面、浮雕陰影、不規則圓角外框、白色凸緣、金＋藏青、Nunito 細數字）。單一淺色主題。三種備選風格 CSS 在專案 previews/（style_A/B/C/D.css），不在 repo。
- 驗證：tools/smoke-test.js 11 項 PASS；桌機六頁＋手機兩頁截圖。
- 沒做完／阻礙：無。照片框內仍是 AI 示意插圖；參考圖中的達利畫作不可使用。
- 下一步建議：收到講者作品圖後放進不規則畫框。
- 是否已同步 artifact-source.html／已發布：是，Artifact v4、GitHub main。

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
