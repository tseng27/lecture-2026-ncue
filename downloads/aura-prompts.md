# 用你自己的 AI Agent 做出「本機 AI 創作室」— 提示詞範本

這份提示詞可以貼給 Claude Code、Codex、Cursor、Gemini CLI 等能讀寫檔案、執行指令的 AI agent，讓它從零幫你做出一個類似 AURA FRAME 的平台：

> 一個在自己電腦上執行、給學生用的中文網頁介面，背後接本機 ComfyUI，能做文生圖、套風格（LoRA）、參考圖改圖、圖生影片、角色對嘴說話，並保存作品庫、有老師密碼。

**使用方式**
- 想一次做完：複製「一、一鍵總提示」整段貼給 agent。
- 想邊做邊測（建議）：先貼「二、分階段提示」的第 0 階段，確認可以用了，再貼下一階段。
- 附帶的範本資料夾 `AURA_FRAME_範本` 可以直接執行，也可以叫 agent「參考這個資料夾的做法」。
- 範本已內建**硬體自動偵測**：雙擊 `硬體檢查.bat`（或啟動 AURA 時）會讀取顯示卡、VRAM、記憶體、硬碟，硬體不適合就跳出提醒視窗。

---

## 零、開始前：先確認你的電腦能不能自己架

這類平台**所有 AI 運算都在你自己的顯示卡上**，不會用雲端。所以硬體決定你能做到哪一步。

### 各功能的硬體需求

| 功能 | 模型類型（範例） | 顯示卡 VRAM 最低 | 建議 | 一次生成時間（參考） |
|---|---|---|---|---|
| 文生圖、LoRA 風格、參考圖改圖 | SD 1.5（如 DreamShaper 8） | 4–6 GB | 8 GB | 數秒～30 秒 |
| 高畫質文生圖 | SDXL | 8 GB | 12 GB | 20 秒～1 分 |
| 寫實攝影風文生圖 | Z-Image Turbo、Flux.1（fp8） | 12 GB | 16 GB | 1～3 分（第一次載入較久） |
| 圖生影片、漫劇分鏡 | MiniMax H3（int8）等影片模型 | 16 GB | 16–24 GB | 3 秒影片約 5～6 分 |
| 對嘴說話（含聲音） | 影片模型 + 音訊 VAE + 自訂節點 | 16 GB | 24 GB | 4 秒影片約 4～6 分 |
| 角色參考影片 | 影片模型 + 參考圖版主模型 | 16 GB 以上 | 24 GB | 數分鐘 |

> 以上「參考」數字來自一台 RTX 5060 Ti 16GB 的實測：影片流程顯存峰值約 15.6 GB，已經貼近 16 GB 上限。12 GB 以下的顯卡基本上跑不動影片。

### 整台電腦的建議規格

| 項目 | 只做圖片 | 要做影片／對嘴 |
|---|---|---|
| 顯示卡 | NVIDIA，VRAM 6–8 GB 以上（RTX 3060 起） | NVIDIA，VRAM **16 GB 以上**（如 RTX 4060 Ti 16G、5060 Ti 16G、4080、4090、5090） |
| 系統記憶體（RAM） | 16 GB | **32 GB 以上**（模型會先載到記憶體，不足會非常慢或當掉） |
| 硬碟空間 | 30 GB 可用（SSD 較快） | **100 GB 以上可用 SSD**（單一影片模型就 10～20 GB） |
| 作業系統 | Windows 10/11（macOS、Linux 也可，但下面的 .bat 啟動檔要改） | Windows 10/11 64 位元 |
| 網路 | 只有第一次下載模型需要 | 同左（模型很大，建議有線網路） |

### 怎麼查自己的顯示卡

- 最簡單：雙擊範本裡的 `硬體檢查.bat`，會自動判斷並在不適合時跳出提醒。
- Windows：按 `Ctrl + Shift + Esc` 開「工作管理員」→「效能」→ 點「GPU」，看「專用 GPU 記憶體」就是 VRAM。
- 或在命令提示字元輸入 `nvidia-smi`，看 `MiB` 那一欄的總量。

### 注意事項

- **AMD／Intel 顯示卡**：ComfyUI 可以跑，但安裝較複雜，影片類模型多半只支援 NVIDIA（CUDA）。初學者建議先只做圖片功能。
- **Mac（Apple Silicon）**：圖片功能可以（統一記憶體 16 GB 以上），影片功能目前不建議。
- **筆電**：同型號筆電顯卡的 VRAM 通常比桌機少，請以工作管理員看到的數字為準；長時間生成會很熱。
- **硬體不夠怎麼辦？**
  1. 只做圖片功能（第 1～3 階段），把影片和對嘴跳過。
  2. 選小一點的模型：SD 1.5 比 SDXL、Flux 省很多。
  3. 降低解析度和影片秒數（例如 448×800、2～3 秒）。
  4. 學校或家裡有一台夠力的電腦，就把它當「主機」，其他電腦用區網模式從瀏覽器連進來（第 5 階段）。
  5. 租雲端 GPU（RunPod、Vast.ai 等），把 ComfyUI 架在上面；這時「不使用雲端」的前提就不成立，也要注意費用與學生資料。

---

## 一、一鍵總提示（整段複製）

```text
請你當我的全端工程師，在這台電腦上從零做出一個「本機 AI 創作室」網頁平台，給國中小學生在教室使用。請全程用繁體中文跟我溝通與撰寫介面文字。

【背景與限制】
- 後端 AI 一律用「本機的 ComfyUI」（預設 http://127.0.0.1:8188），不可以呼叫任何雲端生圖或影片 API。
- 伺服器用 Python 3，只用標準函式庫（http.server、sqlite3、urllib 等），不要 pip 安裝任何套件，這樣可以直接用 ComfyUI 免安裝版內建的 python_embeded 執行。
- 前端用純 HTML + CSS + JavaScript（不要框架、不要建置流程），由同一支 Python 伺服器提供，網址 http://127.0.0.1:8000。所有對 ComfyUI 的呼叫都經過我的伺服器代理（同源），瀏覽器不直接連 8188。
- 預設只監聽 127.0.0.1。

【開工前先做】
1. 先檢查我的電腦：作業系統、NVIDIA 顯示卡型號與 VRAM（nvidia-smi）、系統記憶體、硬碟剩餘空間、有沒有 ComfyUI 與它的位置。
2. 依照下面的門檻告訴我哪些功能能做、哪些要跳過，並等我確認再開始寫程式：
   - 圖片功能（SD1.5）：VRAM ≥ 6GB
   - 寫實攝影模型（Z-Image / Flux fp8）：VRAM ≥ 12GB
   - 影片與對嘴：VRAM ≥ 16GB、RAM ≥ 32GB、SSD 可用空間 ≥ 100GB
3. 如果還沒有 ComfyUI，教我安裝 ComfyUI 免安裝版（Windows portable），並列出要下載的模型檔、放哪個資料夾、檔案大小。

【要做的功能】（依序完成，每完成一項就先讓我測試）
1. 工作流引擎：在 flows/ 放 ComfyUI「API 格式」的工作流 JSON，每個檔案除了 prompt（節點圖）外，再加 mapping（介面欄位 → "節點ID.inputs.欄位名"，可對到多個位置）與 fields（欄位標籤、型別、預設值、範圍）。伺服器把使用者輸入套進工作流後 POST 到 ComfyUI /prompt。只用 ComfyUI 核心節點先做好：基本文生圖、文生圖＋LoRA、參考圖生圖（img2img，含上傳圖片到 ComfyUI /upload/image）。不要猜節點，mapping 不完整就清楚報錯。
2. 學生介面：步驟式卡片「1. 想做什麼？→ 2. 上傳圖片（需要時，可拖曳）→ 3. 寫一句描述 → 4. 比例（直式 9:16／橫式 16:9／方形）與風格 → 開始生成」。模型、步數、CFG、種子、負向提示詞收進「老師設定」，學生預設看不到。種子預設隨機，可勾「鎖定風格」沿用上一張。
3. 模型與 LoRA 清單：從 ComfyUI /object_info 讀可用的 checkpoint 與 LoRA，依底模家族（SD1.5/SDXL/Flux…）過濾，只顯示和目前主模型相容的 LoRA；用 JSON 設定檔提供中文顯示名稱、觸發詞、建議強度、預覽圖、要隱藏的檔名規則。
4. 進度與取消：用 ComfyUI 的 WebSocket（/ws?clientId=…）收進度，顯示真實的進度條、排隊位置、預估時間，並有「取消」按鈕（/interrupt 與 /queue 刪除）。WebSocket 請用標準函式庫自己實作，不要裝套件。錯誤訊息翻成學生看得懂的中文（例如顯存不足、找不到模型）。
5. 作品庫：用 SQLite（data/aura.db）保存每件作品的使用者、流程、參數、種子、輸出檔名；網頁右側顯示縮圖、大圖檢視、下載、「沿用這組設定」、刪除。每個瀏覽器用一個隨機 ID 區分學生，老師可看全班。圖片與影片從 ComfyUI 的 output 資料夾串流（支援 Range，影片可拖曳）。
6. 影片功能（VRAM 不足就跳過）：圖生影片（上傳起始圖＋動作描述＋秒數 2/3/5/8 秒）、可選的首尾幀；「漫劇分鏡」模式：共用角色描述＋2～6 個鏡頭（每格可選鏡頭運動與參考圖），用同一個種子依序生成，再把多段影片合併成一支。請先查我 ComfyUI 裡有哪些影片模型和節點，再決定用哪種影片模型與工作流。
7. 對嘴說話（VRAM 不足就跳過）：上傳角色圖＋輸入台詞，用本機文字轉語音（Windows 內建語音即可）產生音檔，或直接上傳音檔；音檔超過模型上限時在停頓處自動切段，分段生成後合併成一支有聲影片。
8. 老師功能：config/teacher.json 設定老師密碼（PIN），開老師模式、匯入新工作流、看全班作品都要密碼；匯入工作流時可在網頁上設定 mapping。安全：描述含禁用詞就拒絕、負向提示詞預設加入不當內容。
9. 自動啟動：一個 Windows「啟動.bat」，雙擊後自動找到 ComfyUI（先看 config/comfy_path.txt，再找常見位置，例如各磁碟根目錄與使用者資料夾下名稱以 ComfyUI 開頭的資料夾），優先用它的 python_embeded 執行伺服器；ComfyUI 沒開就自動在背景啟動並等它就緒，狀態列顯示「ComfyUI 啟動中／已連線」，就緒前「開始生成」按鈕不能按；最後自動開瀏覽器。再做一個「建立桌面捷徑.bat」。
10. 硬體偵測與提醒：寫一個只用標準函式庫的 aura_hw.py，偵測作業系統、顯示卡型號與 VRAM（ComfyUI 有開時讀 /system_stats，否則用 nvidia-smi，再不行讀 Windows 登錄檔的 HardwareInformation.qwMemorySize，因為 Win32_VideoController 的 AdapterRAM 最多只顯示 4GB）、系統記憶體（Windows 用 ctypes 呼叫 GlobalMemoryStatusEx）、硬碟剩餘空間。依 config/hardware.json 的門檻（圖片 VRAM ≥ 4GB 建議 8GB；寫實攝影 ≥ 12GB；影片與對嘴 ≥ 16GB VRAM、≥ 32GB 記憶體、需 NVIDIA）把每個功能判成「可以／可以但較慢／不建議／無法判斷」，容差 0.6GB（16GB 的卡常回報 15.9GB）。伺服器啟動時檢查，不適合就用 Windows MessageBox 跳出提醒（不擋住程式）；網頁開啟時呼叫 /api/hardware，不適合就跳出對話框列出原因與替代方案，可勾「這台電腦不再提醒」，頁尾有按鈕可重看。區網模式下學生電腦不跑 AI，不要對學生跳提醒。另外做一個「硬體檢查.bat」，讓還沒安裝 ComfyUI 的人先檢查。
11. 區網模式（選用）：--host 0.0.0.0 時必須設定 --access-code 課堂存取碼，每位學生同時只能排 1 件工作；ComfyUI 仍只監聽本機。

【交付】
- 最後給我：資料夾結構說明、一份繁體中文「安裝說明.md」（含硬體需求、要下載的模型清單與放置位置、常見錯誤）、以及你實際測試過什麼、哪些沒辦法測（例如沒有 GPU 時用假的 ComfyUI 測 API）。
- 不要把我的使用者名稱、電腦名稱、絕對路徑寫死在程式裡，一律用相對路徑或自動偵測。
```

---

## 二、分階段提示（建議一次貼一段，測好再貼下一段）

### 第 0 階段：健檢與規劃

```text
我想在自己的電腦上做一個給學生用的「本機 AI 創作室」網頁，後端接本機 ComfyUI（不用任何雲端 API）。請先不要寫程式，幫我做三件事，全部用繁體中文回答：
1. 檢查這台電腦：作業系統、NVIDIA 顯示卡型號與 VRAM（nvidia-smi）、系統記憶體、各磁碟剩餘空間、有沒有安裝 ComfyUI（找找常見位置）以及它的 models 裡有哪些模型、custom_nodes 有哪些自訂節點。
2. 依這些門檻判斷我能做哪些功能：圖片（SD1.5）VRAM ≥ 6GB；寫實攝影模型（Z-Image/Flux fp8）VRAM ≥ 12GB；影片與對嘴 VRAM ≥ 16GB、RAM ≥ 32GB、SSD 可用 ≥ 100GB。做不到的功能，告訴我替代方案。
3. 如果還沒有 ComfyUI 或缺模型，列出安裝步驟、要下載的模型檔名、放哪個資料夾、檔案大小。
```

### 第 0.5 階段：把硬體偵測做進程式（不適合就跳出提醒）

```text
先做一個獨立的硬體偵測模組 aura_hw.py（只用 Python 標準函式庫，Windows 為主，也要能在 macOS／Linux 執行不出錯）：
1. 偵測：作業系統；顯示卡型號與 VRAM（ComfyUI 有開時讀 http://127.0.0.1:8188/system_stats 最準，否則用 nvidia-smi --query-gpu=name,memory.total，再不行讀 Windows 登錄檔 HKLM\SYSTEM\ControlSet001\Control\Class\{4d36e968-e325-11ce-bfc1-08002be10318}\0* 的 HardwareInformation.qwMemorySize；不要用 Win32_VideoController.AdapterRAM，它最多只顯示 4GB）；系統記憶體（Windows 用 ctypes 呼叫 GlobalMemoryStatusEx）；硬碟剩餘空間。
2. 判斷：門檻放在 config/hardware.json（單位 GB），預設 圖片 VRAM 最低 4／建議 8；寫實攝影 12／16；影片與對嘴 16／24，記憶體 32 以上、需 NVIDIA。每個功能判成「可以／可以但較慢／不建議／無法判斷」並列出原因，容差 0.6GB。
3. 提醒：硬體不適合時，Windows 用 ctypes 的 MessageBoxW 跳出提醒視窗，列出偵測結果、每個功能能不能用、替代方案（只做圖片、降低解析度、用學校主機＋區網、租雲端 GPU）。
4. 做「硬體檢查.bat」雙擊就能檢查；之後的網頁也要能呼叫 /api/hardware，在網頁上跳出同樣的提醒，可勾「不再提醒」。
```

### 第 1 階段：最小可用的文生圖

```text
開始做第一版。規格：
- 資料夾 AI創作室/：server.py、static/（index.html、app.js、style.css）、flows/、config/。
- server.py 用 Python 3 標準函式庫（http.server），不可 pip 安裝套件，要能用 ComfyUI 免安裝版的 python_embeded 執行。監聽 127.0.0.1:8000，提供 static 檔案，並代理 ComfyUI（預設 127.0.0.1:8188）。
- API：GET /api/status（ComfyUI 是否連線）、GET /api/flows（列出工作流）、GET /api/models（從 ComfyUI /object_info 取 checkpoint 清單）、POST /api/generate（套用參數後送到 ComfyUI /prompt，回傳 prompt_id）、GET /api/history/<id>、GET /api/view（轉送 ComfyUI 的輸出圖）。
- 工作流格式：flows/基本文生圖.json 包含 name、description、prompt（ComfyUI API 格式，只用核心節點 CheckpointLoaderSimple、CLIPTextEncode×2、EmptyLatentImage、KSampler、VAEDecode、SaveImage）、mapping（例如 "positive": "6.inputs.text"，值可以是陣列對到多個位置）、fields（label、type、default、min、max）。不要猜節點，mapping 錯就回傳清楚的中文錯誤。
- 前端：繁體中文、適合學生，大按鈕。步驟「1. 想做什麼（卡片）→ 2. 寫一句描述 → 3. 比例（直式／橫式／方形）→ 開始生成」，右邊顯示結果圖。步數、CFG、種子、負向提示詞收在「進階」裡。種子預設隨機，可勾「鎖定風格」沿用上一張。
- 做完請用一個假的 ComfyUI（小型 mock 伺服器）先測 API，再教我在真的 ComfyUI 上測試。
```

### 第 2 階段：LoRA 風格與參考圖改圖

```text
在現有程式上加兩個流程：
1. 文生圖＋LoRA：加入 LoraLoader 節點。LoRA 清單從 ComfyUI /object_info 取得，用 safetensors 檔頭的中繼資料或檔名判斷底模家族（SD1.5/SDXL/Flux…），只顯示和目前主模型相容的 LoRA。新增 flows/lora_info.json：每個 LoRA 的中文名稱、觸發詞（生成時自動加到描述前面）、建議強度、預覽圖；新增 config/lora_filter.json 設定要隱藏的檔名規則。介面用「風格卡片」（有預覽圖）讓學生點選，強度用「輕／中／強」三顆按鈕。
2. 參考圖生圖（img2img）：可拖曳上傳圖片，伺服器轉傳到 ComfyUI /upload/image；用 LoadImage + VAEEncode，「改變幅度」用三顆按鈕（像原圖 0.35／平衡 0.55／大改 0.75）。上傳預覽要顯示會被裁切的範圍。
另外加一個 flows/model_info.json：主模型的中文顯示名稱、排序、預設模型、各底模的建議尺寸、要隱藏的模型，以及校園安全用的禁用詞（描述含禁用詞就拒絕）與預設負向提示詞。
```

### 第 3 階段：真實進度、取消、作品庫

```text
加入三個功能：
1. 真實進度：伺服器用 Python 標準函式庫自己實作 WebSocket 用戶端，連 ComfyUI 的 /ws?clientId=<固定ID>（所有工作都用這個 client_id 送出），收 progress / executing / execution_error 訊息，存在記憶體裡。前端輪詢 /api/progress/<id>，顯示排隊位置、進度條、已經過時間與預估時間。
2. 取消：POST /api/cancel，正在跑的用 ComfyUI /interrupt，還在排隊的從 /queue 刪除。只能取消自己的工作。
3. 作品庫：SQLite 存在 data/aura.db（第一次啟動自動建立）。每個瀏覽器第一次開啟時產生隨機 ID，放在 header 送出，用來分辨學生。記錄流程、參數、種子、輸出檔、時間、狀態。右側作品庫：縮圖、大圖檢視（左右鍵切換）、下載、「沿用這組設定」、刪除、載入更多。輸出檔直接從 ComfyUI 的 output 資料夾讀（自動偵測位置，也可用 --output-dir 指定），支援 HTTP Range 讓影片可以拖曳。
4. 把 ComfyUI 的英文錯誤翻成學生看得懂的中文（顯存不足、找不到模型、節點不存在等）。
```

### 第 4 階段：影片、漫劇分鏡、對嘴（需 16GB VRAM）

```text
我的顯示卡有 16GB 以上 VRAM，請加影片功能。先檢查我 ComfyUI 裡有哪些影片模型（models/diffusion_models、text_encoders、vae）和影片相關自訂節點，跟我討論要用哪個影片模型，並列出還缺哪些檔案要下載，等我確認再做。
1. 圖生影片：上傳起始圖＋動作與鏡頭描述＋秒數（2／3／5／8 秒按鈕）＋比例。秒數換算成模型要的影格數（注意模型對影格數與寬高倍數的限制）。顯示預估生成時間。可選「尾幀圖」做首尾幀。
2. 漫劇分鏡模式：共用「角色描述」＋ 2～6 個鏡頭（每格寫動作、選鏡頭運動如推近／拉遠／環繞／固定，可選每格的參考圖），用同一個種子依序生成。伺服器用 series 資料表追蹤進度，全部完成後把多段影片合併成一支 MP4（可用 ComfyUI python_embeded 裡已有的 PyAV / numpy，不要另外安裝）。
3. 對嘴說話：上傳角色圖＋輸入台詞。台詞用本機文字轉語音產生 wav（Windows 可用內建 OneCore 語音，透過 PowerShell 呼叫），也可直接上傳音檔。音檔超過模型單次上限（例如 8 秒）時，在瀏覽器端依停頓自動切段，每段用同一張圖、同一個種子生成，最後合併成一支有聲影片。
4. 影片都在網頁直接播放、可下載，並存入作品庫。
```

### 第 5 階段：老師功能、自動啟動、區網

```text
最後一個階段：
1. 老師密碼：config/teacher.json 有 "pin" 欄位，有填時「老師模式」、匯入工作流、看全班作品都要先輸入密碼（伺服器驗證後發一個 token，用 hmac.compare_digest 比對）。留空就不需要密碼。
2. 匯入工作流：老師可上傳 ComfyUI 匯出的 API 格式 JSON，在網頁上指定每個欄位對到哪個節點（節點ID.inputs.欄位名），存到 flows/。
3. 自動找到並啟動 ComfyUI：依序看 --comfy-dir 參數、config/comfy_path.txt、程式旁邊的資料夾、各磁碟根目錄、使用者的桌面／文件／下載裡名稱以 ComfyUI 開頭的資料夾（免安裝版有 python_embeded，git 版有 venv）。ComfyUI 沒在執行就在背景啟動並等它就緒；找到後記到 config/comfy_path.txt。網頁狀態列顯示「ComfyUI 啟動中／已連線／找不到」，就緒前「開始生成」不能按。按 Ctrl+C 結束時一併關閉由我們開啟的 ComfyUI。
4. Windows 啟動檔「啟動.bat」：用相對路徑，優先使用 ComfyUI 的 python_embeded，找不到再用系統 Python，執行 server.py --open（自動開瀏覽器）。再做「建立桌面捷徑.bat」，用 static 裡的 .ico 當圖示。
5. 區網模式：--host 0.0.0.0 時必須加 --access-code（至少 4 字元），學生網址帶 ?code= 後存在 cookie；每位學生同時只能有 1 件排隊中的工作。ComfyUI 仍只監聽本機，提醒我不要開放 8188。
6. 寫一份繁體中文「安裝說明.md」：硬體需求表、模型下載清單與放置位置、安裝步驟、常見問題。程式裡不能出現我的使用者名稱、電腦名稱或寫死的絕對路徑。
```

---

## 三、讓 agent 做得更好的小技巧

- **一次一個階段**，每階段結束都說「請告訴我怎麼測試」，自己按一次確認可用再往下。
- **貼錯誤訊息**：遇到問題，直接把黑色視窗或瀏覽器的錯誤訊息整段貼給 agent。
- **工作流從 ComfyUI 匯出**：在 ComfyUI 裡先把流程跑通，用「Export (API)」存成 JSON 交給 agent，比讓它憑空寫節點更可靠。
- **沒有 GPU 也能先做介面**：請 agent「寫一個假的 ComfyUI 伺服器回傳固定圖片」，先把網頁做好，之後再換到有顯示卡的電腦。
- **授權**：模型與 LoRA 各有授權（例如 Flux.1 dev 為非商業授權），校內教學使用前請看清楚；學生上傳的照片也請只存在本機。
