import Link from 'next/link';
import { useSetAtom } from 'jotai';

import { filterValueAtom } from '@/domains/product/atoms'; // Using the Jotai atom here
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import useCategory from '@/domains/product/hooks/useCategory';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import PATH from '@/shared/constants/path';

interface SubCategoryItemProps {
  categoryItem: string;
}

const SubCategoryItem = ({ categoryItem }: SubCategoryItemProps) => {
  const setFilterValue = useSetAtom(filterValueAtom); // Use filterValueAtom instead of filterValueState
  const { elaborateCategory } = useCategory();

  const clickCategory = (selectedItem: string) => {
    setFilterValue({ ...INIT_FILTER_VALUE, category: elaborateCategory(selectedItem) });
  };

  return (
    <Link href={PATH.mainProductList}>
      <button
        type="button"
        onClick={() => clickCategory(categoryItem)}
        className="flex p-[16px] gap-[6px] bg-redGray-30 items-center w-full border-solid border-r-[0.5px] border-b-[0.5px] border-gray-200 hover:bg-gray-200"
      >
        <div className="font-medium text-start text-gray-700 text-14 flex-grow">{categoryItem}</div>
        <div>
          <ArrowIcons shape="medium-forward" />
        </div>
      </button>
    </Link>
  );
};

export default SubCategoryItem;
