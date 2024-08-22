'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import AutoCompleteSearchContainer from '@/domains/search/components/AutoCompleteSearchContainer';
import SearchInput from '@/domains/search/components/SearchInput';
import { useAddRecentSearchKeywordMutation } from '@/domains/search/queries/useAddRecentSearchKeywordMutation';
import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useDebounce } from '@/shared/hooks/useDebounce';

const SEARCH_DETAIL_PAGE_PATHNAMES = ['/search/products', '/search/stores'];

const SearchInputSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isSearchDetailPage = SEARCH_DETAIL_PAGE_PATHNAMES.includes(pathname);
  const query = searchParams.get('query');

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [text, setText] = useState(query || '');
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const debouncedText = useDebounce<string>({ value: text, delay: 300 });

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    params.set('query', text);
    router.push(`/search/products?${params.toString()}`);

    if (text.trim() !== '') {
      mutate(text);
      setShowAutoComplete(false);
    }
  };

  return (
    <div className="relative">
      {!isSearchDetailPage && <Header title="검색" />}
      <PaddingWrapper className={`flex items-center ${isSearchDetailPage ? 'py-[10px]' : 'py-0'} `}>
        <SearchInput
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder={isInputFocused ? '' : '궁금한 상품을 찾아보세요!'}
        />
      </PaddingWrapper>
      {showAutoComplete && (
        <div className="absolute top-full z-[20] w-full">
          <AutoCompleteSearchContainer keyword={debouncedText} />
        </div>
      )}
    </div>
  );
};

export default SearchInputSection;
