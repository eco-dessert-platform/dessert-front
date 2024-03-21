'use client';

import XX from './assets/xx.svg';
import Link from 'next/link';
import { useGetRecentSearchKeywordsQuery } from '@/components/units/Search/hooks/useGetRecentSearchKeywordsQuery';
import { useDeleteRecentSearchKeywordMutation } from '@/components/units/Search/hooks/useDeleteRecentSearchKeywordMutation';

type DataType = {
  keyword: string;
};

interface RecentChipProps {
  title: string;
  onClick?: () => void;
}

const RecentChip = ({ title, onClick }: RecentChipProps) => {
  return (
    <div className="flex items-center justify-center gap-[4px] pl-[12px] pr-[8px] py-[8px] min-w-max bg-white border border-solid border-gray-200 rounded-[50px]">
      <Link
        href={`/search/products?query=${title}`}
        className="text-12 font-medium leading-150 tracking-tight-2"
      >
        {title}
      </Link>
      <button onClick={onClick}>
        <XX />
      </button>
    </div>
  );
};

const RecentKeyword = () => {
  const { data: recentKeywords } = useGetRecentSearchKeywordsQuery();
  const { mutate } = useDeleteRecentSearchKeywordMutation();

  const handleDelete = (item: DataType) => {
    mutate(item.keyword);
  };

  return (
    <div className="flex gap-[8px] overflow-x-auto scrollbar-hide">
      {recentKeywords?.map(item => (
        <RecentChip key={item.keyword} title={item.keyword} onClick={() => handleDelete(item)} />
      ))}
    </div>
  );
};

export default RecentKeyword;
