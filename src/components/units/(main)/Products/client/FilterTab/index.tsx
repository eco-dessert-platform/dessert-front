'use client';

import FilterIcon from './assets/filter.svg';
import ProductSortSelect from '@/components/commons/selects/ProductSortSelect';
import { useRecoilState } from 'recoil';
import FilterModal from './FilterModal';
import useModal from '@/commons/hooks/useModal';
import { filterValueState } from '../../atoms';
import { FILTER_VALUES } from '@/commons/constants/filterValues';
import OrderAvailableCheckBox from '@/components/units/(main)/Products/client/FilterTab/OrderAvailableCheckBox';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

const getIngredientTag = (ingredients: Array<string>) => {
  if (ingredients.length === 1) return ingredients[0];
  if (ingredients.length > 1) return `${ingredients[0]} 외 ${ingredients.length - 1}개`;
};

const getPriceTag = ({ minPrice, maxPrice }: { minPrice: number; maxPrice: number }) => {
  if (minPrice === LIMIT_MIN_PRICE && maxPrice === LIMIT_MAX_PRICE) return;
  return `${minPrice.toLocaleString()}~${maxPrice.toLocaleString()}원`;
};

const FilterTab = () => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const { openModal } = useModal();

  const categoryTags = FILTER_VALUES.categories;
  const ingredientTag = filterValue.tags && getIngredientTag(filterValue.tags);
  const priceTag = getPriceTag(filterValue.price);
  const filterTagList = [ingredientTag, priceTag, ...categoryTags];

  const handleFilterClick = (newCategory: string) => {
    setFilterValue(prev => ({
      ...prev,
      category: newCategory
    }));
  };

  const openFilterModal = () => {
    openModal(<FilterModal />);
  };

  return (
    <div className="w-full relative">
      <div className="flex gap-[6px] m-auto pr-[40px] w-[92%] my-[16px] overflow-x-scroll scrollbar-hide ">
        {filterTagList.map((item, index) => {
          if (!item) return;

          const isCategoryTagActive = filterValue.category === item;
          const isNewTag = !FILTER_VALUES.categories.includes(item); // ingredientTag, priceTag

          return (
            <button
              key={index}
              className={`h-[34px] flex-shrink-0 px-3 py-2 rounded-[50px] bg-white ${
                isCategoryTagActive || isNewTag ? 'border-red-500' : 'border-gray-200'
              } border justify-center items-center gap-1 inline-flex`}
              onClick={() => handleFilterClick(item)}
              disabled={isNewTag}
            >
              <p
                className={`text-xs font-medium font-['Pretendard'] leading-[18px] ${
                  isCategoryTagActive || isNewTag ? 'text-red-500  ' : 'text-neutral-800'
                }`}
              >
                {item}
              </p>
            </button>
          );
        })}
      </div>
      <button
        className="absolute right-[3%] top-[16px] bg-white pl-[6px]"
        onClick={openFilterModal}
      >
        <FilterIcon />
      </button>
      <hr className="border-0 bg-gray-100" />
      <div className="flex w-[92%] py-[12px] m-auto justify-between items-center ">
        <OrderAvailableCheckBox />
        <ProductSortSelect />
      </div>
    </div>
  );
};

export default FilterTab;
