import Link from 'next/link';

import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import useCategory from '@/domains/product/hooks/useCategory';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import PATH from '@/shared/constants/path';
import { useFilter } from '@/shared/hooks/useFilter';

interface SubCategoryItemProps {
  categoryItem: string;
}

const SubCategoryItem = ({ categoryItem }: SubCategoryItemProps) => {
  const [, setFilterValue] = useFilter(FILTER_FAMILY_ID.main);
  const { elaborateCategory } = useCategory();

  const clickCategory = (selectedItem: string) => {
    setFilterValue({ ...INIT_FILTER_VALUE, category: elaborateCategory(selectedItem) });
  };

  return (
    <Link href={PATH.mainProductList}>
      <button
        type="button"
        onClick={() => clickCategory(categoryItem)}
        className="bg-red-gray-30 flex w-full items-center gap-[6px] border-r-[0.5px] border-b-[0.5px] border-solid border-gray-200 p-[16px] hover:bg-gray-200"
      >
        <div className="text-14 grow text-start font-medium text-gray-700">{categoryItem}</div>
        <div>
          <ArrowIcons shape="medium-forward" />
        </div>
      </button>
    </Link>
  );
};

export default SubCategoryItem;
