# ai-foo portal

架空の AI サブスクリプション SaaS 企業 **ai-foo株式会社** の社内ポータルサイトの**デモ**です。

> **注意**: 本リポジトリはデモ用途です。掲載されている会社・部署・社員・KPI・お知らせ等のデータおよび人名はすべて架空であり、実在の人物・団体とは一切関係ありません。

## 公開 URL

https://ai-foo.github.io/portal/

## ページ構成

| パス | ページ | 内容 |
|------|--------|------|
| `/` | ダッシュボード | お知らせ・KPI カード・クイックリンク・今月のイベント |
| `/departments` | 部署一覧 | 全 8 部署のミッション・部長・人数・使用ツール |
| `/members` | 社員名簿 | 氏名検索 + 部署フィルタ（クライアントサイド） |
| `/faq` | FAQ・申請ガイド | カテゴリ別の社内 FAQ と各種申請手順 |

## 技術スタック

- [Next.js 15](https://nextjs.org/)（App Router）
- TypeScript
- Tailwind CSS v4
- 静的エクスポート（`output: 'export'`、`basePath: /portal`）
- GitHub Actions → GitHub Pages で自動デプロイ

バックエンド・DB は持たず、全データは TypeScript のダミーデータファイルで管理しています。

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000/portal で確認できます。

ビルド（静的エクスポート）:

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが生成されます。

## ディレクトリ構成

```
portal/
├── app/          # Next.js App Router のページ・レイアウト
├── src/data/     # ダミーデータ（お知らせ・社員・部署・FAQ 等）
└── docs/         # 設定資料（会社プロフィールなど）
```

会社設定の詳細は [docs/company-profile.md](docs/company-profile.md) を参照してください。

## 開発プロセスについて

このリポジトリは **ccpm**（PRD → Epic → Issues → 並列エージェント）のワークフローで構築されました。PRD から Epic とタスク Issue を生成し、複数の実装エージェントが並列に開発しています。

詳細は Epic Issue [#1](https://github.com/ai-foo/portal/issues/1) を参照してください。
