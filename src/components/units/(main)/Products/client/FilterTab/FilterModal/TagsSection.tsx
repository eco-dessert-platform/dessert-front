import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import { FILTER_VALUES } from '@/commons/constants/filterValues';
import { useRecoilState } from 'recoil';
import { tagsTempState } from '../../../atoms';

const TagsSection = () => {
  const [selectedTags, setSelectedTags] = useRecoilState(tagsTempState);
  const uniqueValue = '전체';

  const handleClick = (clickedItem: string) => {
    if (!selectedTags) {
      setSelectedTags([clickedItem]);
      return;
    }

    if (clickedItem === uniqueValue) {
      console.log(clickedItem);
      setSelectedTags([clickedItem]);
      return;
    }

    if (selectedTags.includes(clickedItem)) {
      const updatedItems = selectedTags
        .filter(item => item !== clickedItem)
        .filter(item => item !== uniqueValue);
      setSelectedTags(updatedItems);
      return;
    }

    const updatedItems = [...selectedTags, clickedItem].filter(item => item !== uniqueValue);
    setSelectedTags(updatedItems);
  };

  return (
    <div className="flex flex-col gap-[10px] pt-[16px] pb-[26px]">
      <div className="text-sm">성분</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.tags.map(tag => {
          const isSelected = !!selectedTags?.includes(tag);
          return (
            <CheckBox
              key={tag}
              className={`h-[37px] p-2 rounded-lg ${isSelected ? 'bg-red-50' : 'bg-slate-100'}`}
              name="category"
              isChecked={isSelected}
              onChange={() => handleClick(tag)}
            >
              <span
                className={`text-gray-800 text-xs ${isSelected ? 'font-semibold' : 'font-normal'}`}
              >
                {tag}
              </span>
            </CheckBox>
          );
        })}
      </div>
    </div>
  );
};

export default TagsSection;
