---
issue: 2
stream: scaffold
status: completed
updated: 2026-07-02T00:00:00Z
---

# Issue #2 進捗: Next.js スキャフォールド + 静的エクスポート設定 + 共通レイアウト

## Status: completed

## 実施内容

- Next.js 15 (App Router / TypeScript / Tailwind CSS v4) を手動スキャフォールド
  - `package.json` — name: ai-foo-portal、next ^15.3 / react ^19 / tailwindcss v4 (@tailwindcss/postcss)
  - `next.config.ts` — `output: 'export'`, `basePath: '/portal'`, `trailingSlash: true`, `images.unoptimized: true`
  - `tsconfig.json` — `baseUrl: "."` + `"@/*": ["./*"]`
  - `postcss.config.mjs` — `@tailwindcss/postcss`
  - `.gitignore` — node_modules / .next / out / next-env.d.ts / *.log
- `app/globals.css` — Tailwind v4 `@import "tailwindcss"` + `@theme` でデザイントークン定義
  - paper / ink / ink-soft / line / brand / brand-soft / card のカラートークン
  - `--font-display` (Zen Kaku Gothic New) / `--font-sans` (IBM Plex Sans JP) / `--font-mono` (IBM Plex Mono)
  - `:focus-visible` でキーボードフォーカス可視化
- `app/layout.tsx` — 共通レイアウト
  - next/font/google でフォント 3 種を CSS 変数として注入
  - sticky ヘッダー: brand ドット + mono 体の wordmark「ai-foo」+「社内ポータル」、ナビ（ダッシュボード / 部署 / 名簿 / FAQ、Next.js Link 使用）、1px 罫線
  - main: `max-w-6xl mx-auto px-6` コンテナ
  - フッター: 罫線 + デモ表記
- `app/page.tsx` — プレースホルダ「ダッシュボード（準備中）」（後続タスクが置き換え）

## 検証

- `npm install` 成功
- `npm run build` 成功（out/ に index.html / 404.html / _next が生成、フォント woff2 も静的埋め込み確認済み）

## 備考

- 後続タスクは `/departments`, `/members`, `/faq` の各ページと `app/page.tsx` の本実装を追加する想定
