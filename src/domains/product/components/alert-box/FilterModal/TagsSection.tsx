import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { filterValueState, tagsTempState } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType, ITagsType } from '@/domains/product/types/filterType';
import CheckBox from '@/shared/components/Checkbox';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface TagsSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const TagsSection = ({ filterFamilyId }: TagsSectionProps) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));
  const [selectedTags, setSelectedTags] = useRecoilState<ITagsType>(tagsTempState(filterFamilyId));

  useEffect(() => {
    setSelectedTags(filterValue.tags || '전체');
  }, [filterValue, setSelectedTags]);

  const handleClick = (clickItem: string) => {
    setSelectedTags(clickItem);
  };

  // if (selectedTags.includes(clickedItem)) {
  //   const updatedItems = selectedTags
  //     .filter((item: string) => item !== clickedItem)
  //     .filter((item: string) => item !== uniqueValue);
  //   setSelectedTags(updatedItems.length === 0 ? [uniqueValue] : updatedItems);
  //   return;
  // }

  //   const updatedItems = [...selectedTags, clickedItem].filter(
  //     (item: string) => item !== uniqueValue
  //   );
  //   setSelectedTags(updatedItems);
  // };

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="typo-title-14-semibold text-gray-700">성분</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.tags.map((tag) => {
          const isSelected = !!selectedTags?.includes(tag);
          return (
            <CheckBox
              key={tag}
              className={`h-[37px] p-[8px] rounded-[8px] ${isSelected ? 'bg-[#FDF1EE]' : 'bg-blueGray-30'}`}
              name="category"
              isChecked={isSelected}
              onChange={() => handleClick(tag)}
            >
              <span
                className={`text-gray-800 typo-title-14-regular ${isSelected && 'typo-title-14-semibold text-primaryOrangeRed'}`}
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
