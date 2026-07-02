import type { CompanyEvent } from './types';

// 2026年7月のイベント
export const events: CompanyEvent[] = [
  {
    id: 'ev-001',
    date: '2026-07-06',
    title: '全社朝会',
    place: '8F イベントスペース + オンライン',
    departmentId: null,
  },
  {
    id: 'ev-002',
    date: '2026-07-08',
    title: 'プロダクト勉強会「foo Flow の新アーキテクチャ」',
    place: '6F セミナールーム',
    departmentId: 'dev',
  },
  {
    id: 'ev-003',
    date: '2026-07-15',
    title: 'CS 顧客会議（四半期ビジネスレビュー）',
    place: '5F 会議室 A + オンライン',
    departmentId: 'cs',
  },
  {
    id: 'ev-004',
    date: '2026-07-21',
    title: '避難訓練',
    place: '渋谷オフィス全フロア',
    departmentId: 'corporate',
  },
  {
    id: 'ev-005',
    date: '2026-07-31',
    title: 'TGIF（月末懇親会）',
    place: '8F カフェスペース',
    departmentId: null,
  },
];
