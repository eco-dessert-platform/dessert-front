import Link from 'next/link';
import { useAtom } from 'jotai';
import { filterValueAtom } from '@/domains/product/atoms';
import PATH from '@/shared/constants/path';

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
  const [, setFilterValue] = useAtom(filterValueAtom);

  const handleClickButton = () => {
    setFilterValue((prev) => ({ ...prev, ...getCategoryFilterOption(name) }));
  };

  return (
    <Link
      href={PATH.mainProductList}
      className="flex flex-col gap-1 items-center py-[11px] w-[90px] hover:opacity-70 transition-opacity"
      onClick={handleClickButton}
    >
      <div className="w-[46px] h-[46px] bg-gray-100 rounded-[16px] p-[11px]">{icon}</div>
      <div className="text-gray-800 typo-body-12-regular whitespace-nowrap">{name}</div>
    </Link>
  );
};

export default CategoryButton;
