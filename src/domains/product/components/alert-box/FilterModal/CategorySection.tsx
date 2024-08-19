import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { categoryTempState, filterValueState, mainCategoryState } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Radio from '@/shared/components/Radio';
import { cn } from '@/shared/utils/cn';

interface CategorySectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const CategorySection = ({ filterFamilyId }: CategorySectionProps) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState(filterFamilyId));
  const mainCategory = useRecoilValue(mainCategoryState(filterFamilyId));

  useEffect(() => {
    setSelectedCategory(filterValue.category);
  }, [filterValue, setSelectedCategory]);

  const handleClick = (clickItem: string) => {
    setSelectedCategory(clickItem);
  };

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="typo-title-14-semibold text-gray-700">카테고리</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.category.kind[mainCategory].map((item) => {
          const isSelected = selectedCategory === item;
          return (
            <Radio
              key={item}
              className={cn(
                'h-[37px] p-[8px] rounded-[8px]',
                isSelected ? 'bg-secondaryPink' : 'bg-blueGray-30'
              )}
              isChecked={isSelected}
              onChange={() => handleClick(item)}
            >
              <div
                className={
                  isSelected
                    ? 'typo-title-14-semibold text-primaryOrangeRed'
                    : 'typo-title-14-regular text-gray-800'
                }
              >
                {item}
              </div>
            </Radio>
          );
        })}
      </div>
    </PaddingWrapper>
  );
};

export default CategorySection;
