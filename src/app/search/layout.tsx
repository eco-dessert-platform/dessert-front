import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchInputSection from '@/blocks/search/SearchInputSection';

export const metadata: Metadata = {
  title: '검색',
  description: '빵그리의 오븐 검색 기능으로 원하는 상품을 찾아보실 수 있습니다.'
};

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => (
  <>
    <Suspense>
      <SearchInputSection />
    </Suspense>
    {children}
  </>
);

export default SearchLayout;
