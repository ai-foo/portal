import type { CompanyProfile, Kpi } from './types';

export const company: CompanyProfile = {
  name: 'ai-foo株式会社',
  founded: 2019,
  location: '東京都渋谷区',
  employees: 118,
  products: [
    {
      name: 'foo Assist',
      description: '問い合わせ対応や定型業務を AI エージェントが代行するアシスタントサービス。',
    },
    {
      name: 'foo Flow',
      description: '部門をまたぐ業務フローを AI エージェントで自動化するワークフロー基盤。',
    },
  ],
  plans: ['Starter', 'Pro', 'Enterprise'],
  mission: 'AI エージェントの力で、あらゆる企業の定型業務をなくし、人が創造的な仕事に集中できる社会をつくる。',
};

export const kpis: Kpi[] = [
  {
    label: 'ARR',
    value: '12.4億円',
    delta: '+9.7%',
    note: '年間経常収益。Enterprise プランの新規契約が伸長。',
  },
  {
    label: '有料契約社数',
    value: '862社',
    delta: '+38社',
    note: 'Starter からのアップグレードが好調に推移。',
  },
  {
    label: 'NRR',
    value: '118%',
    delta: '+2pt',
    note: '売上維持率。既存顧客のシート追加・プラン拡張が寄与。',
  },
  {
    label: '月次解約率',
    value: '0.8%',
    delta: '-0.1pt',
    note: 'オンボーディング改善により低水準を維持。',
  },
];
