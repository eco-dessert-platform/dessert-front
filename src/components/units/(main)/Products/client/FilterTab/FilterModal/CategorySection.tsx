import { FILTER_VALUES } from '@/commons/constants/filterValues';
import Radio from '@/components/commons/radio/Radio';
import { useRecoilState } from 'recoil';
import { categoryTempState } from '../../../atoms';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState);

  const handleClick = (clickItem: string) => {
    setSelectedCategory(clickItem);
  };

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="text-14 font-semibold leading-150 tracking-tight-2">카테고리</div>
      <div className="flex gap-[10px] flex-wrap">
        {FILTER_VALUES.categories.map(item => {
          const isSelected = selectedCategory === item;
          return (
            <Radio
              key={item}
              className={`h-[37px] p-[8px] rounded-[8px] ${isSelected ? 'bg-[#FDF1EE]' : 'bg-blueGray-30'}`}
              isChecked={isSelected}
              onChange={() => handleClick(item)}
            >
              <div
                className={`text-gray-900 text-14 leading-150 tracking-tight-2 ${isSelected ? 'font-semibold' : 'font-normal'}`}
              >
                {item}
              </div>
            </Radio>
          );
        })}
      </div>
    </PaddingWrapper>
  );
}

export default CategorySection;
