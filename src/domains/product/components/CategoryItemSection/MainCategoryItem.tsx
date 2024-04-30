import ArrowIcons from '@/shared/components/icons/ArrowIcons';

interface MainCategoryItemProp {
  icon: JSX.Element;
  title: string;
  hasSubCategory: boolean;
  onClick: () => void;
}

const MainCategoryItem = ({ icon, title, hasSubCategory, onClick }: MainCategoryItemProp) => (
  <button
    type="button"
    aria-label={`${title}`}
    onClick={onClick}
    className="flex p-[16px] gap-[6px] items-center w-full border-solid border-b border-gray-100"
  >
    <div>{icon}</div>
    <div className="flew-grow flex-1 text-gray-900 text-start font-semibold">{title}</div>
    <div>{hasSubCategory ? <ArrowIcons shape="bottom" /> : <ArrowIcons shape="forward" />}</div>
  </button>
);

export default MainCategoryItem;
