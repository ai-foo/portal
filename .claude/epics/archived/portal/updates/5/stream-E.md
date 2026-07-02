---
issue: 5
stream: E
status: completed
updated: 2026-07-02
commit: dc57ad0
---

# Issue #5: 部署一覧ページ — 進捗

## 完了内容

- `app/departments/page.tsx` を新規作成（サーバーコンポーネント）
  - 見出し「部署」+ サマリ行（総従業員 118名 / 8部署、数値は mono フォント、company / departments から取得）
  - 2 カラムのカードグリッド（モバイルは 1 カラム）
  - 各カード: tone カラーの上辺 2px ボーダー + 部署名横のドット、部署名（display フォント）、人数（mono「42名」形式）、ミッション文、部長氏名、使用ツールのグレー地タグ
  - データはすべて `src/data/departments.ts` / `src/data/company.ts` から import
- 追加コンポーネントは不要と判断（単一ページで完結）

## 検証

- `npx tsc --noEmit` — エラーなし

## コミット

- `dc57ad0` Issue #5: 部署一覧ページを実装
