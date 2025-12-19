import Link from 'next/link';

import PATH from '@/shared/constants/path';
import { useFilter } from '@/shared/hooks/useFilter';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';

function getCategoryFilterOption(name: string) {
  switch (name) {
    case '새로 나왔어요':
      return {
        tags: ['전체'],
        sort: '최신순'
      };
    case '전체':
      return {
        tags: ['전체'],
        sort: '추천순'
      };
    case '단백질 듬뿍':
      return {
        tags: ['고단백'],
        sort: '추천순'
      };
    case '칼로리 다운':
      return {
        tags: ['저당', '저지방'],
        sort: '추천순'
      };
    case '속 편한 즐거움':
      return {
        tags: ['비건', '글루텐프리'],
        sort: '추천순'
      };
    default:
      return {};
  }
}

interface CategoryButtonProps {
  name: string;
  icon: React.ReactNode;
}

const CategoryButton = ({ name, icon }: CategoryButtonProps) => {
  const [, setFilterValue] = useFilter(FILTER_FAMILY_ID.main);

  const handleClickButton = () => {
    setFilterValue({ ...INIT_FILTER_VALUE, ...getCategoryFilterOption(name) });
  };

  return (
    <Link
      href={PATH.mainProductList}
      className="flex w-[90px] flex-col items-center gap-1 py-[11px] transition-opacity hover:opacity-70"
      onClick={handleClickButton}
    >
      <div className="h-[46px] w-[46px] rounded-[16px] bg-gray-100 p-[11px]">{icon}</div>
      <div className="typo-body-12-regular whitespace-nowrap text-gray-800">{name}</div>
    </Link>
  );
};

export default CategoryButton;
