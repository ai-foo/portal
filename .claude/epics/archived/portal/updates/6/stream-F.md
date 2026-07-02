---
issue: 6
stream: F
status: completed
updated: 2026-07-02
---

# Issue #6: 社員名簿ページ — 検索 + 部署フィルタ

## 実装内容

- `app/members/page.tsx`（新規）: サーバーコンポーネント。metadata（title: 名簿）を定義し、クライアントコンポーネント `MemberDirectory` を描画。
- `src/components/members/MemberDirectory.tsx`（新規）: `'use client'` の名簿コンポーネント。
  - 見出し「名簿」+ 該当件数（mono。フィルタなしは「全118名」、フィルタ時は「118名中 N名を表示」）
  - テキスト検索: placeholder「氏名・かなで検索」。name / kana の部分一致（includes）
  - 部署フィルタ: 「すべて」+ 8部署チップ。選択中は brand-soft 地 + brand 文字。各部署チップに tone の小ドット（ヘッダーのブランドマークと同じ正方形）。選択中チップの再クリックで解除
  - 名簿本体: テーブル（罫線主体・角丸小さめ）。氏名（強調）+ かな（小・グレー）/ 部署バッジ（tone ドット + 部署名）/ 役職 / 入社年（mono）/ メール（mono・小）
  - 0件時: 「該当する社員がいません。検索条件を変えてみてください。」の空状態
  - `useState` + `useMemo`、データは `src/data` から import

## 検証

- `npx tsc --noEmit`: エラーなし

## Acceptance Criteria

- [x] 全社員がテーブルで表示される（氏名 / 部署 / 役職 / 入社年 / メール）
- [x] テキスト検索で氏名（漢字・かな）を部分一致フィルタできる
- [x] 部署チップで絞り込みできる
- [x] 該当件数が表示され、0件時は空状態メッセージを出す
