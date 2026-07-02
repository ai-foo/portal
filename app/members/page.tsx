import type { Metadata } from 'next';
import MemberDirectory from '@/src/components/members/MemberDirectory';

export const metadata: Metadata = {
  title: '名簿',
  description: 'ai-foo株式会社の社員名簿。氏名・かなの検索と部署フィルタで絞り込めます。',
};

export default function MembersPage() {
  return <MemberDirectory />;
}
