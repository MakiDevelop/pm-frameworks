# PM Frameworks 產品設計框架工具集

> 62 個產品設計框架，繁體中文版，給亞洲的產品人。

![License: MIT](https://img.shields.io/badge/license-MIT-green)
![Frameworks: 62](https://img.shields.io/badge/frameworks-62-blue)
![Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01)

**Live site: [pm.chiba.tw](https://pm.chiba.tw)**

每個框架都有：一句話說明、適用場景、操作步驟、實戰案例、記憶錨點、相似框架比較。不是翻譯，是重新用繁中思維寫過的版本。

## 框架分類

| 分類 | 數量 | 範例 |
|------|------|------|
| 成長策略 | 16 | North Star Metric, Growth Flywheel, Ansoff Matrix |
| 執行落地 | 11 | Shape Up, ICE, MoSCoW |
| 系統思維 | 8 | First Principles, Wardley Map, Antifragile |
| 問題定義 | 8 | SWOT, Five Whys, Hypothesis Board |
| 驗證測試 | 7 | PMF, Lean Startup, A/B Testing |
| 創意發想 | 6 | Crazy 8s, Six Thinking Hats |
| 使用者洞察 | 6 | Kano Model, STP, Elevator Pitch |

## Features

- **記憶錨點** — 每個框架附帶口訣，幫你在面試或會議中快速回想
- **相似框架比較** — 自動列出容易搞混的框架，說明差異
- **暗色模式** — 支援明暗切換
- **SEO/GEO 優化** — 結構化資料 + sitemap + OG image
- **離線可用** — 靜態站，無需後端

## Development

```bash
npm install
npm run dev          # localhost:4321
npm run build        # Build to ./dist/
npm run preview      # Preview build
```

## Adding a framework

Create a new `.md` file in `src/content/frameworks/`:

```yaml
---
number: 63
title: '框架名稱'
titleEn: 'Framework Name'
category: '分類'
oneLiner: '一句話說明'
author: '作者'
source: '來源'
stage: '適用階段'
duration: '所需時間'
year: 2020
---

## 什麼時候該用它？
...
```

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- Content Collections — Markdown-based framework data
- Vanilla CSS — No UI framework dependency

## License

MIT
