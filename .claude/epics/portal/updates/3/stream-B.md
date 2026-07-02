---
issue: 3
stream: data
status: completed
updated: 2026-07-02
---

# Stream B: ダミーデータ一式 + 型定義 (src/data)

## 完了内容

- `src/data/types.ts`: Department / Member / Announcement / CompanyEvent / FaqItem / QuickLink / Kpi / CompanyProfile ほか関連型を定義
- `src/data/departments.ts`: 8 部署（ミッション・部長・人数・ツール・部署カラー付き）
- `src/data/members.ts`: 社員 118 名（漢字氏名・かな・部署・役職・入社年・メール）。配列リテラルで直接記述
- `src/data/company.ts`: 会社概要 + KPI 4 件（ARR 12.4億円 / 有料契約 862社 / NRR 118% / 月次解約率 0.8%）
- `src/data/announcements.ts`: お知らせ 8 件（2026-06-15〜2026-07-02、日付降順）
- `src/data/events.ts`: 2026年7月のイベント 5 件
- `src/data/faq.ts`: FAQ 13 件（経費精算 / 休暇・勤怠 / リモート勤務 / 入退社手続き / IT・アカウント）
- `src/data/links.ts`: クイックリンク 8 件

## 検証結果

- 部署別人数: keiei 6 / dev 42 / design 8 / sales 18 / cs 16 / marketing 10 / corporate 12 / it 6 = 合計 118（departments.headcount と完全一致）
- 各部署の部長名が members.ts の role='部長' メンバーと一致
- id / メール / 氏名の重複なし
- 全ファイルを node --experimental-strip-types で読み込み実行し、構文・整合性チェック ALL OK
