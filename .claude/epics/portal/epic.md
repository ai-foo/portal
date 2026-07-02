---
name: portal
status: in-progress
created: 2026-07-02T07:17:44Z
updated: 2026-07-02T07:21:06Z
progress: 0%
prd: .claude/prds/portal.md
github: https://github.com/ai-foo/portal/issues/1
---

# Epic: portal

## Overview

ai-foo株式会社（架空の AI サブスク SaaS 企業、従業員 118 名）の社内ポータルを Next.js 静的サイトとして構築し、GitHub Pages で公開する。ページは 4 つ（ダッシュボード / 部署一覧 / 社員名簿 / FAQ）、データはすべて `src/data/` の TypeScript ダミーデータ。

## Architecture Decisions

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**: `output: 'export'` で完全静的化
- **basePath: '/portal'**: GitHub Pages の project site として配信するため
- **データ層は TS モジュール**: DB なし。`src/data/*.ts` に型付きダミーデータを置き、各ページが import する
- **クライアント処理は名簿検索のみ**: `/members` だけ `'use client'`、他はサーバーコンポーネント（ビルド時静的化）
- **デプロイは GitHub Actions**: `actions/upload-pages-artifact` + `actions/deploy-pages`（build_type: workflow）

## Technical Approach

### Frontend Components

- `app/layout.tsx`: 共通ヘッダーナビ（ロゴ + 4 ページリンク）+ フッター。デザイントークン（カラー・タイポグラフィ）は `globals.css` の Tailwind テーマで定義
- `app/page.tsx`: お知らせフィード、KPI カード（ARR/契約社数/NRR/チャーン）、クイックリンク集、今月のイベント
- `app/departments/page.tsx`: 8 部署のカードグリッド
- `app/members/page.tsx`: 検索ボックス + 部署フィルタ付き名簿（client component）
- `app/faq/page.tsx`: カテゴリ別アコーディオン or セクション表示

### Backend Services

なし（静的サイト）。データは `src/data/` の 7 モジュール:
`company.ts` / `departments.ts` / `members.ts`（118 名生成） / `announcements.ts` / `events.ts` / `faq.ts` / `links.ts`

### Infrastructure

- `.github/workflows/deploy.yml`: master push → next build → Pages デプロイ
- `next.config.ts`: `output: 'export'`, `basePath: '/portal'`, `images.unoptimized: true`

## Implementation Strategy

2 波の並列実行:
- **第 1 波**（基盤・相互に独立）: スキャフォールド+レイアウト、ダミーデータ一式、README
- **第 2 波**（第 1 波依存・相互に独立）: 4 ページ + デプロイワークフロー

型定義はデータタスク（`src/data/types.ts`）が所有し、ページタスクは import のみ行うことでファイル競合を回避する。

## Task Breakdown Preview

1. Next.js スキャフォールド + 静的エクスポート設定 + 共通レイアウト/デザイントークン（基盤）
2. ダミーデータ一式 + 型定義（基盤、1 と並列可）
3. ダッシュボードページ（1,2 依存）
4. 部署一覧ページ（1,2 依存）
5. 社員名簿ページ（1,2 依存）
6. FAQ ページ（1,2 依存）
7. GitHub Actions Pages デプロイ（1 依存）
8. README・会社設定ドキュメント（依存なし）

## Dependencies

- GitHub org `ai-foo` 書き込み権限（確認済み）、GitHub Pages/Actions
- Node.js 24 / npm 11（ローカル確認済み）

## Success Criteria (Technical)

- `npm run build` 成功、`out/` に 4 ページの HTML が生成される
- 名簿検索・部署フィルタがブラウザで動作
- https://ai-foo.github.io/portal/ が HTTP 200 で表示される

## Estimated Effort

- 合計 ~14h 相当（並列実行で壁時計 ~5h 相当）
- タスク数: 8

## Tasks Created
- [ ] #2 - Next.js スキャフォールド + 静的エクスポート設定 + 共通レイアウト (parallel: true)
- [ ] #3 - ダミーデータ一式 + 型定義 (src/data) (parallel: true)
- [ ] #4 - ダッシュボードページ (app/page.tsx) (parallel: true, depends: #2,#3)
- [ ] #5 - 部署一覧ページ (app/departments/page.tsx) (parallel: true, depends: #2,#3)
- [ ] #6 - 社員名簿ページ — 検索 + 部署フィルタ (parallel: true, depends: #2,#3)
- [ ] #7 - FAQ・申請ガイドページ (app/faq/page.tsx) (parallel: true, depends: #2,#3)
- [ ] #8 - GitHub Actions による GitHub Pages デプロイ (parallel: true, depends: #2)
- [ ] #9 - README・会社設定ドキュメント (parallel: true)

Total tasks: 8
Parallel tasks: 8
Sequential tasks: 0
Estimated total effort: 12 hours
