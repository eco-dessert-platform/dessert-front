import { IProductType } from '@/domains/product/types/productType';
import { useEffect, useState } from 'react';
import { transformTagToKr } from '@/domains/product/utils/transfromTag';

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
    <div className="flex items-center justify-between gap-[2px] w-full overflow-x-auto ">
      <div className="flex gap-[4px]">
        {tagsToShow.map((item) => (
          <div
            key={item}
            style={{ flex: 'auto' }}
            className="px-[6px] py-[2px] bg-white rounded-[4px] border border-solid border-gray-200 text-gray-600 typo-body-11-regular"
          >
            {item}
          </div>
        ))}
      </div>
      <span className="text-11 font-semibold text-gray-400">
        {maxTagsToShow < tag.length && `${tag.length - maxTagsToShow}+`}
      </span>
    </div>
  );
};

export default TagSwiper;
