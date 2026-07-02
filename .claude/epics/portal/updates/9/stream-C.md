---
issue: 9
stream: docs
status: completed
updated: 2026-07-02
---

# Issue #9 進捗記録 (Stream C: docs)

## 完了内容

- `README.md` を全面書き換え
  - プロジェクト概要（架空企業のデモである旨を明記）
  - 公開 URL: https://ai-foo.github.io/portal/
  - ページ構成（/ , /departments, /members, /faq）
  - 技術スタック（Next.js 15 / TypeScript / Tailwind CSS v4 / 静的エクスポート / GitHub Actions → GitHub Pages）
  - ローカル開発手順（npm install / npm run dev / npm run build）
  - ディレクトリ構成（app/, src/data/, docs/）
  - ccpm ワークフローで構築された旨と Epic Issue #1 へのリンク
- `docs/company-profile.md` を新規作成
  - 会社概要（設立 2019 / 渋谷 / 従業員 118 名 / ミッション）
  - プロダクト（foo Assist / foo Flow）と料金プラン（Starter / Pro / Enterprise）
  - KPI 設定（ARR 12.4 億円 / 有料契約 862 社 / NRR 118% / 月次解約率 0.8%）
  - 部署構成テーブル（8 部署 / 計 118 名）
  - 社内ツール設定（Slack / Notion / キンタイム / ラクセイサン 等）

会社設定は PRD（.claude/prds/portal.md）と一致していることを確認済み。

## 変更ファイル

- README.md
- docs/company-profile.md
- .claude/epics/portal/updates/9/stream-C.md
