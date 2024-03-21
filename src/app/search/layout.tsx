import { Suspense } from 'react';
import SearchInputContainer from '@/components/units/Search/client/SearchInputContainer';

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return (
    <>
      <Suspense>
        <SearchInputContainer />
      </Suspense>
      {children}
    </>
  );
};

export default SearchLayout;
