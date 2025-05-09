'use client';

import RecentKeyword from '@/domains/search/components/RecentKeyword';
import { useGetRecentSearchKeywordsQuery } from '@/domains/search/queries/useGetRecentSearchKeywordsQuery';
import { useDeleteRecentSearchKeywordMutation } from '@/domains/search/queries/useDeleteRecentSearchKeywordMutation';

type DataType = {
  keyword: string;
};

const RecentKeywordSection = () => {
  const { data: recentKeywords } = useGetRecentSearchKeywordsQuery();
  const { mutate } = useDeleteRecentSearchKeywordMutation();

  const handleDelete = (item: DataType) => {
    mutate(item.keyword);
  };

  return (
    <div className="flex gap-[8px] overflow-x-auto scrollbar-hide">
      {recentKeywords?.map((item) => (
        <RecentKeyword key={item.keyword} title={item.keyword} onClick={() => handleDelete(item)} />
      ))}
    </div>
  );
};

export default RecentKeywordSection;
