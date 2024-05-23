'use client';

import { useRecoilValue } from 'recoil';
import { useRouter, usePathname } from 'next/navigation';
import { isAllBadgeSelectedState } from '@/domains/review/atoms';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Button from '@/shared/components/Button';

const NextButtonSection = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const isAllBadgeSelected = useRecoilValue(isAllBadgeSelectedState);

  const handleButtonClick = () => {
    if (!isAllBadgeSelected) return;
    push(`${pathname}?progress=2`);
  };

  return (
    <div className="fixed z-bottomButton left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] bg-white">
      <PaddingWrapper>
        <Button
          variants="primary-black"
          onClick={handleButtonClick}
          className={`${isAllBadgeSelected ? 'bg-gray-900 cursor-pointer' : 'bg-gray-300 cursor-default'}`}
        >
          다음
        </Button>
      </PaddingWrapper>
    </div>
  );
};

export default NextButtonSection;
