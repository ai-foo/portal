// ai-foo株式会社 社内ポータル: データ型定義

export interface Department {
  /** URL などで使う slug */
  id: string;
  name: string;
  /** 部署のミッション（1-2文） */
  mission: string;
  /** 部長氏名（members.ts の該当メンバーと一致） */
  head: string;
  headcount: number;
  /** 主に使用しているツール */
  tools: string[];
  /** 部署カラー（hex） */
  tone: string;
}

export interface Member {
  id: string;
  /** 氏名（漢字、姓 名） */
  name: string;
  /** よみがな（ひらがな） */
  kana: string;
  departmentId: string;
  /** 部長 / マネージャー / 一般職種名 */
  role: string;
  joinedYear: number;
  email: string;
}

export type AnnouncementCategory = '全社' | '人事' | 'IT' | 'イベント' | 'プロダクト';

export interface Announcement {
  id: string;
  /** YYYY-MM-DD */
  date: string;
  category: AnnouncementCategory;
  title: string;
  body: string;
}

export interface CompanyEvent {
  id: string;
  /** YYYY-MM-DD */
  date: string;
  title: string;
  place: string;
  /** 主催部署（全社イベントは null） */
  departmentId: string | null;
}

export type FaqCategory =
  | '経費精算'
  | '休暇・勤怠'
  | 'リモート勤務'
  | '入退社手続き'
  | 'IT・アカウント';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface QuickLink {
  id: string;
  label: string;
  /** 1行説明 */
  description: string;
  href: string;
  /** 表示用の頭文字（1-2字） */
  initial: string;
}

export interface Kpi {
  label: string;
  /** 表示用文字列（例: "12.4億円"） */
  value: string;
  /** 前四半期比の表示用文字列（例: "+8.5%"） */
  delta: string;
  note: string;
}

export interface ProductSummary {
  name: string;
  description: string;
}

export interface CompanyProfile {
  name: string;
  founded: number;
  location: string;
  employees: number;
  products: ProductSummary[];
  plans: string[];
  mission: string;
}
