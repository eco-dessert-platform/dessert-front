import BtnBack from '@/components/commons/button/client/Btn_back';
import SearchInputContainer from '@/components/units/Search/client/SearchInputContainer';
import { Suspense } from 'react';

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return (
    <>
      <div className="w-[92%] m-auto flex items-center gap-[17px] py-[10px]">
        <BtnBack />
        <Suspense>
          <SearchInputContainer />
        </Suspense>
      </div>
      {children}
    </>
  );
};

export default SearchLayout;
