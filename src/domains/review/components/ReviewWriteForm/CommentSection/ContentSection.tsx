'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';

const ContentSection = () => {
  const { register } = useFormContext<IReviewWriteForm>();

  return (
    <div className="flex flex-col items-center">
      <PaddingWrapper className="typo-title-16-semibold text-center text-gray-900">
        상품은 어땠나요?
      </PaddingWrapper>
      <PaddingWrapper className="py-0 w-full">
        <textarea
          {...register('content')}
          placeholder="구매한 상품에 대한 경험을 공유해주세요(선택)"
          className="p-[10px] w-full h-[150px] rounded-[6px] bg-red-gray-30 typo-title-14-regular text-gray-900 placeholder:text-gray-500 outline-hidden resize-none scrollbar-hide"
        />
      </PaddingWrapper>
    </div>
  );
};

export default ContentSection;
