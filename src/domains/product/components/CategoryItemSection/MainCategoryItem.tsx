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
    className="flex w-full items-center gap-[6px] border-b border-solid border-gray-100 p-[16px]"
  >
    <ProductCategoryIcons shape={shape} />
    <div className="flew-grow flex-1 text-start font-semibold text-gray-900">{title}</div>
    <div>{hasSubCategory && <ArrowIcons shape="bottom" />}</div>
  </button>
);

export default MainCategoryItem;
