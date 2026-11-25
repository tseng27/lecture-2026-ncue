# HANDOFF_LOG｜工作交接紀錄

新紀錄加在最上方。格式見 AGENTS.md 第 8 節。任何 AI 接手前先讀最上方三筆；結束前新增一筆。

## 2026-11-25 23:20（Asia/Taipei）｜Claude
- 任務：講者補充 MIA 使用的工具：作曲 Suno AI；歌詞與風格 ChatGPT；生圖 Flow；生影片 Runway 平台中的 Seedance 2.5；剪輯剪映。
- 改了什麼：MIA_FLOW 第 02、04、06、07 步加入工具與工具標籤（.tooltag），流程下方註記改為工具組合。
- 驗證：smoke-test 11 項 PASS；#elara 截圖已看過。
- 沒做完／阻礙：MIA 定稿版本仍未確認。
- 下一步建議：無。
- 是否已同步 artifact-source.html／已發布：是，Artifact、GitHub main。

## 2026-11-25 23:30（Asia/Taipei）｜Claude
- 任務：講者上傳 2024-08-26 公視講座〈藝術的力量與未來〉簡報文字，要求主題 04「從 AI 生成到自主創作」改用裡面的藝術創作工作流程；ELARA 的創作流程整理 MIA 的過程。
- 改了什麼：
  - 主題 04（P5／V.practice）：流程改為簡報「創作說明」的七步：生活圖像→提示詞→分析→提取→生成→增加→再生成（可點選）。新增：發散與收斂、提示詞五要素（材質、色彩、比例、環境、元素）、2024/08/23 真實提示詞範例、從作品到發表（形式與議題、主題策展練習「鳥與家」「墨・黑」標為策展練習不列展歷、發布）、作品案例改為作品集網站的三件作品圖、2024 講座使用的影像生成工具（現版待核）。原「作品狀態與展歷」保留。
  - ELARA：新增「MIA《我把春天帶著走》創作流程」八步（MIA_FLOW）配官方形象圖。內容只用已知資料（官方圖、音樂到視覺的順序、兩版分鏡 220 秒 40 鏡／216 秒 19 鏡、逐鏡檢查項目）；每步用的工具與檔案版本標為待講者補充。
- 驗證：smoke-test 11 項 PASS；#practice、#elara 桌機與手機截圖已看過。
- 沒做完／阻礙：MIA 每一步使用的工具（作曲、生成、剪輯）與定稿版本待講者提供。
- 下一步建議：講者補 MIA 工具後，把「待補充」改成實際工具名稱。
- 是否已同步 artifact-source.html／已發布：是，Artifact、GitHub main。

## 2026-11-25 23:15（Asia/Taipei）｜Claude
- 任務：講者提供藝術作品集網站 https://tseng-kuo-cheng-art.tseng27.chatgpt.site （主題 03「突破創作邊界」的資料來源），說「這裡可以找」；並上傳 ELARA 五位成員的官方形象圖。
- 改了什麼：
  - 主題 03（V.art／M.art／SERIES）：改用作品集網站 /series/ 的五個系列（01 凝形・自然、02 溫柔巨物、03 居所・記憶・身份、04 文明・集體記憶、05 身體・存在），系列說明照網站原文，17 件作品的年代照各作品頁。作品卡顯示作品圖（直接連到作品集網站 /assets/…，常數 PORT），點擊開該作品頁。舊的「發展中」分組與《灰燼之後的方舟》《餘燼之舟》已移除，因為作品集網站沒有列出。
  - 新增 CONFIG.links.portfolio，放在主題 03、結語「講座之後」、資源頁。
  - ELARA：五張官方形象圖存為 img/elara-hana／mia／zoe／lena／chloe.jpg，成員卡改成顯示圖片（點擊看大圖），狀態改為「官方形象圖」。
  - 社群連結：講者再次提供的 YouTube／IG／臉書清單，與 Grok 已填的 CONFIG.social 一致，未改。
  - tools/smoke-test.js：console 檢查忽略 net::ERR_TUNNEL 等離線錯誤（沙箱連不到作品集網站的圖）。
- 驗證：smoke-test 11 項 PASS；主題 03 以替代圖測版面、ELARA 桌機與手機截圖已看過。作品集圖片在沙箱連不到，實際載入要在一般瀏覽器確認。
- 沒做完／阻礙：無。
- 下一步建議：在一般瀏覽器打開 #art 確認 17 張作品圖都有出現。
- 是否已同步 artifact-source.html／已發布：是，Artifact、GitHub main（含 Grok 前兩筆的修改）。

## 2026-11-25 21:37（Asia/Taipei）｜Grok
- 任務：講者要求在主題 02「全球 AI 教育革命」新增 R003，連結 https://www.facebook.com/share/p/1HtpuXEEQG/；並補 Instagram 帳號名稱：@tseng27tw＝AI藝術創作 IG、@elara5girls＝ELARA 虛擬女子團體 IG、@art27tw＝個人 IG。
- 改了什麼：
  - `index.html` V.s02：在 R001／R002 下方新增 R003 卡片，連結至講者提供的 Facebook 貼文。WebFetch 逾時、curl 回傳 Facebook 錯誤頁，讀不到標題或內文，故標籤與按鈕皆為「Facebook 貼文（講者提供）」，不臆造貼文內容。附註說明此為補充連結、不是課程成效證明，也不與兩項已查核研究並列。開頭「這兩項外部研究是提問框架」未改。`CONFIG.links.r003` 已新增。
  - Instagram：`CONFIG.social.instagram` 標籤改為「AI藝術創作 IG（@tseng27tw）」「ELARA 虛擬女子團體 IG（@elara5girls）」「個人 IG（@art27tw）」；`CONFIG.links.instagram` 改為「個人 Instagram」→ `https://www.instagram.com/art27tw/`。
- 驗證：smoke-test.js 11 項 PASS；#home／#s02／#resources 400px 無水平捲動、無 console 錯誤；截圖已目視檢查。
- 沒做完／阻礙：R003 貼文內容無法讀取，若講者提供標題可再改標籤。排版與社群連結變更仍已推送 GitHub main。
- 下一步建議：講者確認預覽後再推 GitHub Pages。
- 是否已同步 artifact-source.html／已發布：未同步 artifact-source.html；**已推送 GitHub main**。

## 2026-11-25 21:35（Asia/Taipei）｜Grok
- 任務：講者看過關於我頁說「這樣左邊很空 幫我重新排版」；接著提供 YouTube／Instagram／Facebook 連結，要求底部「延伸連結」改成三組。
- 改了什麼：
  - `index.html` V.home：取消左右分欄。T04《我的美好人生》改成全寬橫幅（自然高度），主題句「你的人生，就是你的藝術品」放大並加紅色螢光筆底；其下公仔牆改全寬 5＋4 拍立得（桌機兩排置中，860px 以下改 3 列）。原文、9 張圖、AI 註記與燈箱都保留。
  - 新增 `CONFIG.social`（youtube 4、instagram 3、facebook 3），V.home「延伸連結」改為 YouTube／Instagram／Facebook 三組，沿用 `.lk` 按鈕並新分頁開啟。
  - `CONFIG.links`：instagram 填 `https://www.instagram.com/tseng27tw/`；youtube 填 `https://www.youtube.com/@ELARAOfficialStudio`；ELARA Facebook 改為 `https://www.facebook.com/ELARA.5GIRLS`；藝術頁標籤改為「AI藝術創新實驗室 Facebook」。資源頁 IG／YT 的「未定位」改為「網址已填，頁面未逐一查核」（不宣稱已查核帳號頁）。
- 驗證：`NODE_PATH=/workspace/pwtools/node_modules node tools/smoke-test.js` 11 項 PASS；#home、#resources 在 400px `scrollWidth=400`；home／resources／elara／break／s06／lecture／cover 無 console 錯誤，上述頁面不再出現社群「待補」按鈕；桌機與手機截圖已目視檢查。
- 沒做完／阻礙：本人真實照片與課堂照、藝術作品圖仍待補。變更尚未推送，等講者確認。
- 下一步建議：講者確認預覽後再推 GitHub Pages。
- 是否已同步 artifact-source.html／已發布：未同步 artifact-source.html；**已推送 GitHub main**。

## 2026-11-25 21:06（Asia/Taipei）｜Grok
- 任務：講者在自由探索「關於我」（#home）說「右邊的圖片用這幾張填滿」，並提供 9 張（去重後）自己的 AI 公仔形象圖；稍後再改同一頁的標題、三張身分卡、區塊標題與四個標籤文字（原文見講者訊息）。
- 改了什麼：
  - `img/about-01.jpg`～`about-09.jpg`：講者提供的 9 張彩色公仔圖，縮為高 800px、JPEG 品質 82。順序為畫家、Design Master、Art Pro、Sound Genius、Code Pro、Coffee Artist、Green Thumb、Lab Guru、Sky Captain（第 2、3 張原檔重複，只留一張）。
  - `index.html` 在 CONFIG 旁新增 `ABOUT_IMGS`；V.home 右側佔位卡改為 3×3 紙膠帶拍立得牆（彩色、`object-fit:contain`、不裁切、不套灰階），標題「AI 公仔實驗：如果我是…」，註記「AI 生成形象圖（講者本人提供）」；點擊開燈箱，Esc／背景／關閉鈕可關。樣式寫在 `<style>` 覆寫區塊末端。
  - 同一 V.home 文案（未改其他視圖；講座提示與主題 06 維持原句）：標題「我是曾國正」；紅字副標「一位在美術教學、藝術創作與生活中持續探索的終身學習者」；引言「我相信，美術不只是創作作品，更是觀察生活、表達自己，探索人生的方式。」；三卡改為美術教師／藝術創作者／終身學習者及對應說明（圓／方／三角圖示保留）；區塊標題改「從教學、創作到實踐」；四個標籤改為「AI 教學觀察所｜藝術教育研究與實踐」「AI 藝術與跨媒材創作」「ELARA 虛擬女團創作計畫」「數位教材與創作平台開發」。頁首標籤仍是「開場｜關於我與核心理念」。
- 驗證：`NODE_PATH=/workspace/pwtools/node_modules node tools/smoke-test.js` 11 項 PASS；#home 在 400px 寬 `scrollWidth=400`（無水平捲動）；燈箱可開、Esc 可關；桌機／手機截圖已目視檢查。
- 沒做完／阻礙：本人真實照片與課堂照仍未放入（右側是 AI 公仔，已標示生成圖，不冒充課堂照）。作品卡、IG／YouTube 仍待補。變更尚未推送，等講者確認。
- 下一步建議：講者確認預覽後再推 GitHub Pages；若要調公仔排列或標籤用語可再改 `ABOUT_IMGS`。
- 是否已同步 artifact-source.html／已發布：未同步 artifact-source.html；**已推送 GitHub main**。

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
