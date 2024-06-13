import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';

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
      href="/products"
      className="flex flex-col justify-between items-center gap-1 py-[11px]"
      onClick={handleClickButton}
    >
      <div>{icon}</div>
      <div className="font-normal text-gray-800 text-14 leading-140 tracking-tight-4">{name}</div>
    </Link>
  );
};

export default CategoryButton;
