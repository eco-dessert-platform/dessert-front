'use client';

import { useEffect, useId, useRef } from 'react';

import { LayoutGroup } from 'framer-motion';
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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (newCategory: string) => {
    setFilterValue((prev) => ({
      ...prev,
      category: elaborateCategory(newCategory)
    }));
  };

  useEffect(() => {
    const activeIndex = FILTER_VALUES.category.kind[mainCategory].findIndex(
      (category) => category === filterValue.category
    );
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      const tab = tabRefs.current[activeIndex];
      const tabContainer = tabContainerRef.current;

      if (tab && tabContainer) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = tabContainer.getBoundingClientRect();

        const offsetLeft = tabRect.left - containerRect.left + tabContainer.scrollLeft;
        tabContainer.scrollTo({ left: offsetLeft, behavior: 'smooth' });
      }
    }
  }, [filterValue, mainCategory]);

  return (
    <LayoutGroup id={id}>
      <div ref={tabContainerRef} className="flex overflow-x-scroll scrollbar-hide">
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
    </LayoutGroup>
  );
};

export default CategoryTab;
