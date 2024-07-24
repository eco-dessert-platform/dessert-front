'use client';

import { useEffect, useId, useRef } from 'react';

import { LayoutGroup } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { filterValueState } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import TabButton from '@/shared/components/TabButton';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const CategoryTab = ({ filterFamilyId }: Props) => {
  const id = useId();
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(filterFamilyId));
  console.log('궁금해?????????????????????', filterValue.category);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (newCategory: string) => {
    setFilterValue((prev) => ({
      ...prev,
      category: newCategory
    }));
  };

  useEffect(() => {
    const activeIndex = FILTER_VALUES.categories.findIndex(
      (category) => category === filterValue.category
    );
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      const tab = tabRefs.current[activeIndex];
      const tabContainer = tabContainerRef.current;

      if (tab && tabContainer) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = tabContainer.getBoundingClientRect();

        // Adjust the scroll position to align the active tab with the left edge of the container
        const offsetLeft = tabRect.left - containerRect.left + tabContainer.scrollLeft;
        tabContainer.scrollTo({ left: offsetLeft, behavior: 'smooth' });
      }
    }
  }, [filterValue]);

  return (
    <LayoutGroup id={id}>
      <div ref={tabContainerRef} className="flex overflow-x-scroll scrollbar-hide">
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
