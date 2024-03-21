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
import PaddingWrapper from '@/components/commons/PaddingWrapper';

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
    <PaddingWrapper className="flex flex-col gap-[16px] pb-[12px] border-b-[1px] border-solid border-gray-100">
      <div className="flex justify-between items-center gap-[6px]">
        <div className="flex gap-[6px] overflow-x-scroll scrollbar-hide">
          {filterTagList.map((item, index) => {
            if (!item) return;

            const isCategoryTagActive = filterValue.category === item;
            const isNewTag = !FILTER_VALUES.categories.includes(item); // ingredientTag, priceTag

            return (
              <button
                key={index}
                className={`px-[12px] py-[8px] min-w-max rounded-[50px] bg-white border text-12 leading-150 tracking-tight-2
                ${
                  isCategoryTagActive || isNewTag
                    ? 'border-primaryOrangeRed text-primaryOrangeRed font-bold'
                    : 'border-gray-200 text-gray-900 font-medium'
                }`}
                onClick={() => handleFilterClick(item)}
                disabled={isNewTag}
              >
                {item}
              </button>
            );
          })}
        </div>
        <button onClick={openFilterModal}>
          <FilterIcon />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <OrderAvailableCheckBox />
        <ProductSortSelect />
      </div>
    </PaddingWrapper>
  );
};

export default FilterTab;
