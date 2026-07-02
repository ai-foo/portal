---
issue: 4
stream: D
status: completed
updated: 2026-07-02
---

# Issue #4: ダッシュボードページ — 進捗記録

## Status: completed

## 実施内容

`app/page.tsx` のプレースホルダをダッシュボード実装に置き換え（サーバーコンポーネント、追加コンポーネントファイルなし）。

1. **ページヘッダー**: 「ダッシュボード」見出し（--font-display）+ 基準日 2026-07-02 を `Intl.DateTimeFormat('ja-JP')` で「2026年7月2日(水)」形式・mono 表示
2. **KPI ストリップ**: `kpis` 4 件を `gap-px` + `bg-line` の罫線グリッドで横並び（sm:2列 / lg:4列）。value は mono 大、delta は符号で色分け（+ → brand / − → 落ち着いた赤）、note 付き
3. **お知らせ（左 2/3）**: `announcements` を日付降順ソートし、日付(mono) + カテゴリバッジ（全社のみ brand-soft、他はグレー地）+ タイトル + body。`divide-line` の罫線区切り
4. **クイックリンク（右）**: `quickLinks` を initial 付きコンパクトリスト（href は # のまま）
5. **今月のイベント（右）**: `events` を日付昇順で MM/DD(mono) + タイトル + 場所、主催部署は `departments.ts` の `tone` 色ドット + 部署名

## 検証

- `npx tsc --noEmit`: パス（エラーなし）
- データはすべて `src/data/` から import（ハードコードなし）

## 変更ファイル

- `app/page.tsx`
- `.claude/epics/portal/updates/4/stream-D.md`（本ファイル）
