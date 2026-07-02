---
issue: 7
stream: G
status: completed
updated: 2026-07-02
---

# Issue #7: FAQ・申請ガイドページ — 進捗

## 状況

completed

## 実施内容

- `app/faq/page.tsx` を新規作成（サーバーコンポーネント、JS 不要）
  - 見出し「FAQ・申請ガイド」+ 導入文（#ask-corporate への誘導）
  - カテゴリアンカーリンク行（罫線チップ、`scroll-mt` でスティッキーヘッダー対応）
  - カテゴリ順: 経費精算 → 休暇・勤怠 → リモート勤務 → 入退社手続き → IT・アカウント
  - 各セクション: display フォントのカテゴリ見出し + mono の件数表示（例: `03 件`）
  - 各 FAQ はネイティブ `<details>/<summary>` アコーディオン。デフォルトマーカーは CSS で非表示にし、mono の `+` / `−` に置換（`group-open:` で切替）。カード内は `divide-y` + 回答部は破線罫線で開閉時も罫線が破綻しない
- データは `src/data/faq.ts` のみ使用（全 13 件）
- コンポーネント分割は不要と判断（ページ単体で完結、`src/components/faq/` は未作成）

## 検証

- `npx tsc --noEmit`: エラーなし

## コミット

- `e23d9ab` Issue #7: FAQ・申請ガイドページを実装（カテゴリ別セクション + ネイティブ details アコーディオン）
