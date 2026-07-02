---
name: portal
description: ai-foo株式会社(架空のAIサブスクSaaS企業)の社内ポータルサイト — デモ用途
status: backlog
created: 2026-07-02T07:17:44Z
---

# PRD: portal

## Executive Summary

架空のサブスクリプション SaaS 企業「ai-foo株式会社」の社内ポータルサイトをデモ用に構築する。全社員が日常的に使う「会社の玄関口」として、お知らせ・部署情報・社員名簿・社内 FAQ・各種ツールへのリンクを 1 か所に集約する。Next.js の静的エクスポートで構築し、GitHub Pages（https://ai-foo.github.io/portal/）で公開する。

## Problem Statement

社内情報が Slack・Notion・スプレッドシートに分散しており、「誰がどの部署か」「経費精算はどこから申請するか」「今月の全社イベントは何か」を調べるのに時間がかかる — という典型的な社内課題を想定し、それを解決するポータルのデモを作る。デモとして、SaaS 企業らしいリアリティのあるダミーデータ（組織・社員・KPI）を含める。

### 会社設定（ダミーデータの前提）

- **ai-foo株式会社** — AI エージェントで業務を自動化するサブスクリプション SaaS 企業
- 設立 2019 年 / 本社: 東京・渋谷 / 従業員 118 名
- プロダクト: `foo Assist`（AI 業務アシスタント）、`foo Flow`（ワークフロー自動化）
- 料金プラン: Starter / Pro / Enterprise
- 部署構成（8 部署 / 計 118 名）: 経営企画室(6)、プロダクト開発部(42)、プロダクトデザイン部(8)、セールス部(18)、カスタマーサクセス部(16)、マーケティング部(10)、コーポレート部(12)、情報システム部(6)

## User Stories

1. **社員として**、トップページで最新のお知らせと今月のイベントを一目で確認したい。
   - AC: ダッシュボードにお知らせ一覧（日付・カテゴリ付き）と今月のイベントが表示される。
2. **社員として**、会社の KPI（ARR・契約社数・NRR 等）を確認してビジネスの状況を把握したい。
   - AC: ダッシュボードに KPI カードが表示される。
3. **社員として**、よく使う社内ツール（Slack / Notion / 勤怠 / 経費精算 / GitHub 等）にすぐ飛びたい。
   - AC: ダッシュボードにクイックリンク集がある。
4. **新入社員として**、各部署のミッションと責任者を知りたい。
   - AC: 部署一覧ページに全 8 部署のミッション・部長名・人数・使用ツールが表示される。
5. **社員として**、名前や部署で同僚を検索したい。
   - AC: 社員名簿ページで氏名検索と部署フィルタが動作する（約 120 名分のダミーデータ）。
6. **社員として**、経費精算や有給申請などの手続き方法を FAQ で調べたい。
   - AC: FAQ ページにカテゴリ別の質問と回答が表示される。

## Functional Requirements

- ダッシュボード（`/`）: お知らせ、KPI カード、クイックリンク集、今月のイベント
- 部署一覧（`/departments`）: 8 部署のカード（ミッション・部長・人数・使用ツール）
- 社員名簿（`/members`）: 検索 + 部署フィルタ（クライアントサイド）
- FAQ（`/faq`）: カテゴリ別の申請ガイド・FAQ
- 共通ヘッダーナビゲーションで全ページを回遊できる
- 全データは TypeScript のダミーデータファイル（`src/data/`）で管理

## Non-Functional Requirements

- Next.js (App Router / TypeScript / Tailwind CSS) + `output: 'export'` による静的サイト
- GitHub Pages（project site, basePath `/portal`）で公開、GitHub Actions で自動デプロイ
- 認証なし（デモのため公開でよい。データはすべて架空）
- テンプレ感のない、SaaS 企業らしいクリーンな UI

## Success Criteria

- `npm run build` が成功し、4 ページ分の静的 HTML が生成される
- https://ai-foo.github.io/portal/ で全ページが閲覧できる
- 社員名簿の検索・フィルタがブラウザ上で動作する

## Constraints & Assumptions

- データはすべて架空（実在の人物・企業とは無関係）
- バックエンド・DB は持たない（静的サイトのみ)
- リポジトリは public（GitHub Pages 無料枠のため）

## Out of Scope

- 認証・権限管理
- CMS / 管理画面からのデータ編集
- 検索エンジン最適化、多言語対応
- モバイルアプリ

## Dependencies

- GitHub organization `ai-foo` への書き込み権限（確認済み）
- GitHub Pages / GitHub Actions
