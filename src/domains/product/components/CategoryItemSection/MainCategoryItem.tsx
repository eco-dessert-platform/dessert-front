import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import ProductCategoryIcons from '@/shared/components/icons/ProductCategoryIcons';

interface MainCategoryItemProp {
  shape: string;
  title: string;
  hasSubCategory: boolean;
  onClick: () => void;
}

const MainCategoryItem = ({ shape, title, hasSubCategory, onClick }: MainCategoryItemProp) => (
  <button
    type="button"
    aria-label={`${title}`}
    onClick={onClick}
    className="flex p-[16px] gap-[6px] items-center w-full border-solid border-b border-gray-100"
  >
    <ProductCategoryIcons shape={shape} />
    <div className="flew-grow flex-1 text-gray-900 text-start font-semibold">{title}</div>
    <div>{hasSubCategory && <ArrowIcons shape="bottom" />}</div>
  </button>
);

export default MainCategoryItem;
