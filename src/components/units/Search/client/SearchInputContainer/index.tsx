'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useAddRecentSearchKeywordMutation } from '@/components/units/Search/hooks/useAddRecentSearchKeywordMutation';
import { useDebounce } from '@/components/units/Search/hooks/useDebounce';
import SearchInput from '@/components/commons/inputs/SearchInput';
import AutoCompleteSearchContainer from '@/components/units/Search/client/AutoCompleteSearchContainer';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import BtnBack from '@/components/commons/button/client/Btn_back';

const SEARCH_DETAIL_PAGE_PATHNAMES = ['/search/products', '/search/stores'];

const SearchInputContainer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isSearchDetailPage = SEARCH_DETAIL_PAGE_PATHNAMES.includes(pathname);
  const query = searchParams.get('query');

  const [text, setText] = useState(query || '');
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const debouncedText = useDebounce<string>({ value: text, delay: 500 });

  const { mutate } = useAddRecentSearchKeywordMutation();

  useEffect(() => {
    const handleWindowClick = () => {
      setShowAutoComplete(false);
    };
    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  useEffect(() => {
    setText(query || '');
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setShowAutoComplete(true);
  };

  const handleInputEnter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('query', text);
    router.push('/search/products' + '?' + params.toString());

    mutate(text);
    setShowAutoComplete(false);
  };

  return (
    <PaddingWrapper className="relative py-[10px]">
      <div className="relative flex items-center">
        {isSearchDetailPage && <BtnBack />}
        <SearchInput
          value={text}
          onChange={handleInputChange}
          onEnter={handleInputEnter}
          placeholder="궁금한 상품을 찾아보세요!"
        />
        {showAutoComplete && (
          <div className="absolute top-full z-[1] w-full">
            <AutoCompleteSearchContainer keyword={debouncedText} />
          </div>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default SearchInputContainer;
