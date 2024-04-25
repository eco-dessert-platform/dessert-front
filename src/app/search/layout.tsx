import { Suspense } from 'react';
import Header from '@/shared/components/Header';
import SearchInputSection from '@/blocks/search/SearchInputSection';

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => (
  <>
    <Header title="검색" />
    <Suspense>
      <SearchInputSection />
    </Suspense>
    {children}
  </>
);

export default SearchLayout;
