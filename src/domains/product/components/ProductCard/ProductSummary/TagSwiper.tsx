import { useEffect, useRef, useState } from 'react';

import { transformTagToKr } from '@/domains/product/utils/transfromTag';

interface TagSwiperProps {
  tag: string[];
}

const TagSwiper = ({ tag }: TagSwiperProps) => {
  const [maxTagsToShow, setMaxTagsToShow] = useState(tag.length);
  const tagContainerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<Array<HTMLDivElement | null>>([]);

  const tagFilter = tag.map((item: string) => transformTagToKr(item));

  useEffect(() => {
    const updateMaxTagsToShow = () => {
      if (tagContainerRef.current) {
        const containerWidth = tagContainerRef.current.offsetWidth;
        let totalWidth = 0;
        let tagsToShow = 0;

        tagRefs.current.forEach((tagRef, index) => {
          if (tagRef) {
            totalWidth += tagRef.offsetWidth;
            if (totalWidth <= containerWidth * 0.7) {
              tagsToShow = index + 1;
            }
          }
        });

        setMaxTagsToShow(tagsToShow);
      }
    };

    updateMaxTagsToShow();
    window.addEventListener('resize', updateMaxTagsToShow);

    return () => window.removeEventListener('resize', updateMaxTagsToShow);
  }, [tag]);

  return (
    <div ref={tagContainerRef} className="flex items-center justify-between w-full">
      <div className="flex gap-[4px] whitespace-nowrap">
        {tagFilter.slice(0, maxTagsToShow).map((item, index) => (
          <div
            key={item}
            ref={(el) => {
              tagRefs.current[index] = el;
            }}
            className="px-[6px] py-[2px] bg-white rounded-[4px] border border-solid border-gray-200 text-gray-600 typo-body-11-regular"
          >
            {item}
          </div>
        ))}
      </div>
      {maxTagsToShow < tag.length && (
        <span className="text-11 font-semibold text-gray-400">+{tag.length - maxTagsToShow}</span>
      )}
    </div>
  );
};

export default TagSwiper;
