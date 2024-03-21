import ProductAndStoreTabWithCount from '@/components/units/Search/client/ProductAndStoreTabWithCount';
import { Suspense } from 'react';

interface SearchResultLayout {
  children: React.ReactNode;
}

const SearchResultLayout = ({ children }: SearchResultLayout) => {
  return (
    <>
      <Suspense>
        <ProductAndStoreTabWithCount />
      </Suspense>
      {children}
    </>
  );
};

export default SearchResultLayout;
