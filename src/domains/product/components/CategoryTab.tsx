'use client';

import { useId, useRef } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { mainCategoryAtom } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import useCategory from '@/domains/product/hooks/useCategory';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import TabButton from '@/shared/components/TabButton';
import { useFilter } from '@/shared/hooks/useFilter';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const CategoryTab = ({ filterFamilyId }: Props) => {
  const id = useId();
  const [filterValue, setFilterValue] = useFilter(filterFamilyId);
  const [mainCategory] = useAtom(mainCategoryAtom);
  const { elaborateCategory, simplifyCategory } = useCategory();
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
          className="scrollbar-hide min-w-max overflow-x-scroll"
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
