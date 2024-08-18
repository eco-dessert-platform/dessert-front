import { useRecoilState } from 'recoil';
import { tagsTempState } from '@/domains/product/atoms';
import { FILTER_VALUES } from '@/domains/product/constants/filterValues';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import CheckBox from '@/shared/components/Checkbox';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { cn } from '@/shared/utils/cn';

interface TagsSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const TagsSection = ({ filterFamilyId }: TagsSectionProps) => {
  const [selectedTags, setSelectedTags] = useRecoilState(tagsTempState(filterFamilyId));
  const uniqueValue = '전체';

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
                isSelected ? 'bg-secondaryPink' : 'bg-blueGray-30'
              )}
              name="category"
              isChecked={isSelected}
              onChange={() => handleClick(tag)}
            >
              <span
                className={
                  isSelected
                    ? 'typo-title-14-semibold text-primaryOrangeRed'
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
