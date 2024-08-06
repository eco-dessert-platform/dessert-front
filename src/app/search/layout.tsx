import { Suspense } from 'react';

import SearchInputSection from '@/blocks/search/SearchInputSection';

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
