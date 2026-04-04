---
number: 12
title: 'Scrum 敏捷框架'
titleEn: 'Scrum'
category: '執行落地'
oneLiner: '用固定時間盒的衝刺迭代，讓團隊在不確定中持續交付價值、快速學習調整。'
author: 'Jeff Sutherland / Ken Schwaber'
source: 'Scrum Guide · Agile Manifesto'
stage: '產品開發 · 持續迭代 · 團隊協作'
duration: 'Sprint 1-4 週（常見 2 週）'
year: 1995
---

## 什麼時候該用它？

Scrum 適合在「需求不確定、但必須持續交付」的情境下使用。它不是萬能藥，但如果你的團隊正在做的事情沒辦法一開始就完美規劃，Scrum 能讓你在混亂中保持節奏。

- **新產品開發**：需求還在摸索、規格會一直變，用 Sprint 把大目標拆成小批次驗證
- **跨職能協作**：PM、設計、工程師需要緊密合作，Scrum 的儀式能強制創造溝通機會
- **交付壓力大**：老闆每天問「什麼時候好？」，用 Sprint 給出可預期的交付節奏
- **團隊剛組建**：新團隊需要快速建立工作默契，Scrum 的結構能幫助磨合
- **技術債務累積**：需要在持續開發中穿插重構，Sprint Planning 是分配時間的好機會
- **遠端團隊**：分散各地的團隊特別需要 Daily Standup 這類固定的同步點

## 框架結構

Scrum 的核心是一個簡單的迴圈：計畫 → 執行 → 檢視 → 調整，不斷重複。

### 三個角色

1. **Product Owner（PO）**：決定「做什麼」。維護 Product Backlog、排優先序、代表利害關係人的需求。一個產品只有一個 PO。
2. **Scrum Master（SM）**：確保「怎麼做」的流程順暢。移除障礙、引導儀式、保護團隊不被外部干擾。不是管理者，是服務型領導。
3. **Development Team**：負責「做出來」。跨職能、自組織，理想大小 3-9 人。團隊自己決定怎麼完成工作。

### 三個工件

1. **Product Backlog**：所有待辦事項的優先排序清單，由 PO 維護。最上面的項目要足夠細，隨時可以拉進 Sprint。
2. **Sprint Backlog**：本次 Sprint 承諾要完成的項目 + 達成計畫。一旦進入 Sprint，範圍不輕易變動。
3. **Increment（增量）**：每個 Sprint 結束時必須產出「可用的產品增量」——不是做到一半的功能，是可以上線的東西。

### 五個儀式

1. **Sprint Planning**（2-4 小時）：選擇本 Sprint 要做的項目，拆解成具體任務
2. **Daily Standup**（15 分鐘）：每天同步「昨天做了什麼、今天要做什麼、有什麼卡住」
3. **Sprint Review**（1-2 小時）：展示成果給利害關係人，收集回饋
4. **Sprint Retrospective**（1-1.5 小時）：團隊內部反思「哪裡做得好、哪裡要改善」
5. **Backlog Refinement**（持續進行）：細化未來 1-2 個 Sprint 的待辦項目

## 來源與歷史

- **1986**：Hirotaka Takeuchi 和 Ikujiro Nonaka 在 HBR 發表〈The New New Product Development Game〉，用橄欖球的 Scrum 比喻跨職能團隊的開發方式
- **1995**：Jeff Sutherland 和 Ken Schwaber 在 OOPSLA 大會正式發表 Scrum 框架，定義了角色、儀式和工件
- **2001**：17 位軟體開發者在猶他州聚會，發表 Agile Manifesto，Scrum 成為敏捷運動的旗艦框架
- **2010**：Scrum Guide 首次以獨立文件發佈，成為全球統一的 Scrum 定義（至今已更新多次）
- **2020**：Scrum Guide 大改版，移除「Development Team」改稱「Developers」，強調 Product Goal 概念，精簡為 13 頁

## 真實案例：Spotify 的 Squad 模型

Spotify 在 2012 年公開了他們基於 Scrum 演化而來的組織模型，當時有超過 250 名工程師。

核心改造：
1. **Squad**（相當於 Scrum Team）：6-12 人的自治小隊，各自負責一個產品功能區塊（如搜尋、播放、推薦）
2. **Tribe**：多個相關的 Squad 組成，不超過 100 人（Dunbar 數字）
3. **Chapter**：同職能的人跨 Squad 組成的學習社群（例如所有後端工程師）
4. **Guild**：興趣社群，任何人都可以加入（例如 Web 效能 Guild）

成果：Spotify 在 2012-2018 年間用戶從 2,000 萬成長到 2 億，每天部署超過 100 次，同時維持工程師滿意度。他們的 Squad 模型後來被 ING Bank、荷蘭政府等組織採用。

但 Spotify 自己後來也承認：這個模型不是銀彈，他們仍然在持續調整。2020 年 Spotify 前員工 Jeremiah Lee 寫了〈Failed #SquadGoals〉指出多個實際問題，提醒不要盲目複製。

## 使用步驟

### Step 1：組建 Scrum Team

確定 PO、SM 和開發團隊。PO 必須有決策權（不是傳話筒），SM 不能同時是 PO，團隊大小控制在 3-9 人。

### Step 2：建立 Product Backlog

PO 整理出初始的 Backlog，用 User Story 格式（「身為 ___，我想要 ___，這樣我可以 ___」）或其他團隊習慣的格式。最上面的 10-15 個項目要 ready，下面的可以粗略。

### Step 3：執行第一個 Sprint

Sprint Planning 時團隊一起選項目、估點數、拆任務。第一個 Sprint 的速度（velocity）會是猜的，沒關係，跑 3-4 個 Sprint 後自然會校準。

### Step 4：建立節奏

Daily Standup 固定時間地點、Sprint Review 邀請真正的利害關係人（不是只有老闆）、Retrospective 要產出具體改善行動而非只是抱怨大會。

### Step 5：持續調整

每個 Sprint 的 Retrospective 至少產出 1 個可執行的改善項目，放進下個 Sprint 的 Backlog。團隊的速度和品質會隨著迭代穩步提升。

## 這樣做 vs 避免這些

### 這樣做

- Sprint 結束時一定要產出可 demo 的成果——即使很小，也要是「完成的」不是「做到一半的」
- Retrospective 的改善行動要有人認領、有期限，不然就是浪費時間開會
- PO 持續跟使用者對話，把學到的東西反映在 Backlog 排序上
- 團隊自己估算工作量，不要由外部指定「這個應該做幾天」

### 避免這些

- 不要把 Daily Standup 開成進度報告會——它是團隊內部同步用的，不是向主管報告的
- 不要在 Sprint 中途不斷插入新需求（如果真的很急，那就終止這個 Sprint 重新 Planning）
- 不要跳過 Retrospective——它是 Scrum 最有價值的儀式，沒有它就只是在趕工
- 不要把 Story Point 當成工時來管理——「8 點 = 8 小時」是最常見的誤用

<div class="maki-take">
<div class="maki-take-label">Maki 觀點 — 電商場景實戰</div>

台灣電商團隊跑 Scrum 最大的挑戰不是方法論，而是「業務節奏跟 Sprint 節奏打架」。

品牌電商一年有幾個大檔期（38、母親節、618、雙 11、雙 12、年貨節），每個檔期前 2-3 週整個團隊都在做活動頁、調整促銷邏輯、串接金流折扣。這時候硬要跑兩週 Sprint 根本不現實——你的 Sprint Backlog 在第二天就被老闆的「緊急需求」炸掉了。

我的做法是「雙軌制」：平時跑正規 Sprint（2 週），檔期前切成 1 週的 mini Sprint，檔期當週改成看板（Kanban）模式，純粹看任務流動。等檔期結束後再切回 Sprint，第一個 Sprint 專門做 Retro + 技術債清理。

另一個台灣電商常見的問題：PO 到底是誰？很多品牌電商的「PO」其實是行銷主管，他關心的是活動檔期和轉換率，不太管產品長期規劃。如果你的團隊也是這樣，建議把 PO 拆成兩個角色——行銷主管當「業務 PO」管短期需求，PM 當「產品 PO」管長期 Backlog，兩個人每週花 30 分鐘對齊優先序。

最後一個觀察：LINE OA 推播和蝦皮活動的排程常常跟 Sprint 的時間軸對不上。解法很簡單——把這些外部排程當成 Sprint Planning 的輸入條件，而不是 Sprint 中途的插件。提前知道什麼時候要推播、什麼時候蝦皮有活動，就能提前規劃好對應的開發任務。

</div>
