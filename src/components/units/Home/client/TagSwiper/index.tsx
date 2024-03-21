import { IProductType } from '@/commons/types/productType';
import { useEffect, useState } from 'react';
import { transformTagToKr } from '@/commons/constants/transfromTag';

interface TagSwiperProps {
  tag: IProductType['tags'];
}

const TagSwiper = ({ tag }: TagSwiperProps) => {
  const [maxTagsToShow, setMaxTagsToShow] = useState(4);
  const tagFilter = tag.map((item: string) => {
    const translatedItem = transformTagToKr(item);
    return translatedItem;
  });

  const tagsToShow = tagFilter.slice(0, maxTagsToShow);

  useEffect(() => {
    if (window.innerWidth <= 330) {
      setMaxTagsToShow(1);
    } else if (window.innerWidth <= 430) {
      setMaxTagsToShow(2);
    } else if (window.innerWidth <= 570) {
      setMaxTagsToShow(3);
    }
  }, []);

  return (
    <div className="flex items-center justify-between gap-[2px] w-full overflow-x-auto leading-150 tracking-tight-2">
      <div className="flex gap-[4px]">
        {tagsToShow.map((tag, index) => {
          return (
            <div
              key={index}
              style={{ flex: 'auto' }}
              className="px-[6px] py-[2px] bg-white rounded-[4px] border border-solid border-gray-200 text-gray-600 text-[11px] font-normal"
            >
              {tag}
            </div>
          );
        })}
      </div>
      <span className="text-11 font-semibold text-gray-400">
        {maxTagsToShow < tag.length && `${tag.length - maxTagsToShow}+`}
      </span>
    </div>
  );
};

export default TagSwiper;
