'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAddRecentSearchKeywordMutation } from '@/domains/search/queries/useAddRecentSearchKeywordMutation';
import { useDebounce } from '@/shared/hooks/useDebounce';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import PATH from '@/shared/constants/path';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Header from '@/shared/components/Header';
import SearchInput from '@/domains/search/components/SearchInput';
import AutoCompleteSearchContainer from '@/domains/search/components/AutoCompleteSearchContainer';

const SearchInputSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { openToast } = useToastNewVer();

  const isSearchDetailPage = pathname === PATH.searchProductList;
  const query = searchParams.get('query');

  const [text, setText] = useState(query || '');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [warning, setWarning] = useState(false);
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
    setWarning(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();

    const noInputValue = !text.trim();
    if (noInputValue) {
      setWarning(true);
      openToast({ message: '검색어를 입력해주세요.' });
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set('query', text);
    router.push(`/search/products?${params.toString()}`);
    mutate(text);
    setShowAutoComplete(false);
  };

  return (
    <div className="relative">
      {!isSearchDetailPage && <Header title="검색" />}
      <PaddingWrapper className={`flex items-center ${isSearchDetailPage ? 'py-[10px]' : 'py-0'} `}>
        <SearchInput
          value={text}
          warning={warning}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder={isInputFocused ? '' : '궁금한 상품을 찾아보세요!'}
          autoFocus
        />
      </PaddingWrapper>
      {showAutoComplete && (
        <div className="absolute top-full z-[20] w-full">
          <AutoCompleteSearchContainer keyword={debouncedText.trim()} />
        </div>
      )}
    </div>
  );
};

export default SearchInputSection;
