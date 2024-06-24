'use client';

import { useId } from 'react';
import { LayoutGroup } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import { filterValueState } from '@/domains/product/atoms';
import TabButton from '@/shared/components/TabButton';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const CategoryTab = ({ filterFamilyId }: Props) => {
  const id = useId();
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));

  const handleClick = (newCategory: string) => {
    setFilterValue((prev) => ({
      ...prev,
      category: newCategory
    }));
  };

  return (
    <LayoutGroup id={id}>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {FILTER_VALUES.categories.map((category) => (
          <TabButton
            key={category}
            active={filterValue.category === category}
            onClick={() => handleClick(category)}
            className="min-w-max p-[10px]"
          >
            {category}
          </TabButton>
        ))}
      </div>
    </LayoutGroup>
  );
};

export default CategoryTab;
