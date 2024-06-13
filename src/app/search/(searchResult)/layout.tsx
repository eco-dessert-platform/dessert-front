import { Suspense } from 'react';
import ProductAndStoreTabWithCount from '@/domains/search/components/ProductAndStoreTabWithCount';

interface SearchResultLayoutProps {
  children: React.ReactNode;
}

const SearchResultLayout = ({ children }: SearchResultLayoutProps) => (
  <>
    <Suspense>
      <ProductAndStoreTabWithCount />
    </Suspense>
    {children}
  </>
);

export default SearchResultLayout;
