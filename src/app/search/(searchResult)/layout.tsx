import { Suspense } from 'react';
import ProductAndStoreTab from '@/shared/components/ProductAndStoreTab';

interface SearchResultLayoutProps {
  children: React.ReactNode;
}

const SearchResultLayout = ({ children }: SearchResultLayoutProps) => (
  <>
    <Suspense>
      <ProductAndStoreTab defaultPath="/search" />
    </Suspense>
    {children}
  </>
);

export default SearchResultLayout;
