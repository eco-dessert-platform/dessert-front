'use client';

import { useId, useRef } from 'react';

import { LayoutGroup, motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { filterValueState, mainCategoryState } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import useCategory from '@/domains/product/hooks/useCategory';
import TabButton from '@/shared/components/TabButton';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const CategoryTab = ({ filterFamilyId }: Props) => {
  const id = useId();
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  const mainCategory = useRecoilValue(mainCategoryState(filterFamilyId));
  const { elaborateCategory, simplifyCategory } = useCategory(filterFamilyId);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = (newCategory: string) => {
    setFilterValue((prev) => ({
      ...prev,
      category: elaborateCategory(newCategory)
    }));
  };

  return (
    <LayoutGroup id={id}>
      <div className="overflow-hidden" ref={tabContainerRef}>
        <motion.div
          drag="x"
          dragConstraints={tabContainerRef}
          dragElastic={0}
          className="min-w-max overflow-x-scroll scrollbar-hide"
        >
          <div className="flex w-full">
            {FILTER_VALUES.category.kind[mainCategory].map((category, index) => {
              const isActive =
                simplifyCategory(filterValue.category) === category ||
                (!filterValue.category && index === 0);
              return (
                <TabButton
                  key={category}
                  active={isActive}
                  onClick={() => handleClick(category)}
                  className="min-w-max p-[10px]"
                >
                  {category}
                </TabButton>
              );
            })}
          </div>
        </motion.div>
      </div>
    </LayoutGroup>
  );
};

export default CategoryTab;
