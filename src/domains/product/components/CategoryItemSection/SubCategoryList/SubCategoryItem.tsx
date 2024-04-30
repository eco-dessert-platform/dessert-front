import Link from 'next/link';

import ArrowIcons from '@/shared/components/icons/ArrowIcons';

interface SubCategoryItemProps {
  categoryItem: string;
}

const SubCategoryItem = ({ categoryItem }: SubCategoryItemProps) => (
  <Link href="/products">
    <button
      type="button"
      className="flex p-[16px] gap-[6px] bg-redGray-30 items-center w-full border-solid border-r-[0.5px] border-b-[0.5px] border-gray-200 hover:bg-gray-200"
    >
      <div className="font-medium text-start text-gray-700 text-14 flex-grow">{categoryItem}</div>
      <div>
        <ArrowIcons shape="medium-forward" />
      </div>
    </button>
  </Link>
);

export default SubCategoryItem;
