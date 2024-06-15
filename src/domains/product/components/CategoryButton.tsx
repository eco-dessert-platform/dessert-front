import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import PATH from '@/shared/constants/path';

interface CategoryButtonProps {
  name: string;
  icon: React.ReactElement;
  isCategoryTab: boolean;
}

const CategoryButton = ({ name, icon, isCategoryTab }: CategoryButtonProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(FILTER_FAMILY_ID.main));

  const handleClickButton = () => {
    const newFilterValue = isCategoryTab
      ? { ...filterValue, category: name }
      : { ...filterValue, tags: [name] };

    setFilterValue(newFilterValue);
  };

  return (
    <Link
      href={PATH.mainProductList}
      className="flex flex-col justify-between items-center gap-1 py-[11px] hover:opacity-70 transition-opacity"
      onClick={handleClickButton}
    >
      <div className="w-[46px] h-[46px] bg-gray-50 rounded-[16px] p-[11px]">{icon}</div>
      <div className="text-gray-800 typo-body-12-regular">{name}</div>
    </Link>
  );
};

export default CategoryButton;
