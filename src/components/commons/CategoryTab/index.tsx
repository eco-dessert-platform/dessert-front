'use client';

import TabButton from '../TabButton.tsx';
import { useRecoilState } from 'recoil';
import { isCategoryTabState } from '@/atoms/atom';

interface CategoryTabProps {
  categories: string[];
}

const CategoryTab = ({ categories }: CategoryTabProps) => {
  const [isCategoryTab, setIsCategoryTab] = useRecoilState(isCategoryTabState);

  const handleClickBtn = (index: number) => {
    if (index === 0) {
      setIsCategoryTab(true);
    } else {
      setIsCategoryTab(false);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-[44px] bg-white justify-start items-start inline-flex relative">
      {categories.map((tab, index) => (
        <TabButton
          key={index}
          name={tab}
          handleClickBtn={() => handleClickBtn(index)}
          ProductName={tab}
          isCategoryTab={isCategoryTab}
        />
      ))}

      <div className="w-full h-[2px] bg-gray-100 flex absolute left-0 bottom-0">
        <div
          className={`w-1/2 h-[2px] bg-[#7E7475] duration-[0.5s] transform ${
            isCategoryTab ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
      </div>
    </div>
  );
};

export default CategoryTab;
