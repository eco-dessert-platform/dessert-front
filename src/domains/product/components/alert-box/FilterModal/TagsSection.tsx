'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { filterValueAtom, tagsAtom } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import CheckBox from '@/shared/components/Checkbox';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { cn } from '@/shared/utils/cn';

const TagsSection = () => {
  const [filterValue] = useAtom(filterValueAtom);
  const [selectedTags, setSelectedTags] = useAtom(tagsAtom);
  const uniqueValue = '전체';

  useEffect(() => {
    setSelectedTags(filterValue.tags);
  }, [filterValue, setSelectedTags]);

  const handleClick = (clickedItem: string) => {
    if (clickedItem === uniqueValue) {
      setSelectedTags([clickedItem]);
      return;
    }
    if (selectedTags.includes(clickedItem)) {
      const updatedItems = selectedTags
        .filter((item) => item !== clickedItem)
        .filter((item) => item !== uniqueValue);
      setSelectedTags(updatedItems);
      return;
    }

    const updatedItems = [...selectedTags, clickedItem].filter((item) => item !== uniqueValue);
    setSelectedTags(updatedItems);
  };

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="typo-title-14-semibold text-gray-700">성분</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.tags.kind.map((tag) => {
          const isSelected = !!selectedTags?.includes(tag);
          return (
            <CheckBox
              key={tag}
              className={cn(
                'h-[37px] p-[8px] rounded-[8px]',
                isSelected ? 'bg-secondary-pink' : 'bg-blue-gray-30'
              )}
              name="category"
              isChecked={isSelected}
              onChange={() => handleClick(tag)}
            >
              <span
                className={
                  isSelected
                    ? 'typo-title-14-semibold text-primary-orange-red'
                    : 'typo-title-14-regular text-gray-800'
                }
              >
                {tag}
              </span>
            </CheckBox>
          );
        })}
      </div>
    </PaddingWrapper>
  );
};

export default TagsSection;
