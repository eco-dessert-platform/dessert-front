import type { Metadata } from 'next';
import Header from '@/shared/components/Header';

export const metadata: Metadata = {
  title: '카테고리',
  description:
    '카테고리별로 건강한 디저트를 확인하세요. 식빵.모닝빵, 베이글.도넛, 케이크, 타르트.파이, 쿠키.비스킷.크래커, 과자, 잼.청, 아이스크림, 요거트, 그래놀라, 기타',
  openGraph: {
    title: '카테고리 | 빵그리의 오븐',
    description: '카테고리별로 건강한 디저트를 확인하세요.'
  }
};

const CategoryPageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="카테고리" />
    {children}
  </>
);

export default CategoryPageLayout;
