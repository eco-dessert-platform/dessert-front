'use client';

import AutoCompleteSearchItem from '@/domains/search/components/AutoCompleteSearchContainer/AutoCompleteSearchItem';
import { useGetAutoCompleteSearchTextsQuery } from '@/domains/search/queries/useGetAutoCompleteSearchTextsQuery';

interface AutoCompleteSearchContainerProps {
  keyword: string;
}

const AutoCompleteSearchContainer = ({ keyword }: AutoCompleteSearchContainerProps) => {
  const { data: autoCompleteSearchTexts } = useGetAutoCompleteSearchTextsQuery(keyword);

  return (
    <div className="scrollbar-hide max-h-[calc(100vh-192px)] overflow-y-scroll shadow-md shadow-gray-100">
      {!!autoCompleteSearchTexts?.length &&
        autoCompleteSearchTexts.map((text) => (
          <AutoCompleteSearchItem key={text} text={text} keyword={keyword} />
        ))}
    </div>
  );
};

export default AutoCompleteSearchContainer;
