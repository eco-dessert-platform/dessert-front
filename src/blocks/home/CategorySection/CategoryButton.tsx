import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import PATH from '@/shared/constants/path';

interface CategoryButtonProps {
  name: string;
  icon: React.ReactElement;
}

const CategoryButton = ({ name, icon }: CategoryButtonProps) => {
  const setFilterValue = useSetRecoilState(filterValueState(FILTER_FAMILY_ID.main));

  const handleClickButton = () => {
    setFilterValue((prev) => ({ ...prev, tags: [name] }));
  };

  return (
    <Link
      href={PATH.mainProductList}
      className="flex flex-col gap-1 items-center py-[11px] px-[22px] hover:opacity-70 transition-opacity"
      onClick={handleClickButton}
    >
      <div className="w-[46px] h-[46px] bg-gray-100 rounded-[16px] p-[11px]">{icon}</div>
      <div className="text-gray-800 typo-body-12-regular whitespace-nowrap">{name}</div>
    </Link>
  );
};

export default CategoryButton;
