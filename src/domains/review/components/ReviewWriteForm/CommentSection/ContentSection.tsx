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
      <PaddingWrapper className="w-full py-0">
        <textarea
          {...register('content')}
          placeholder="구매한 상품에 대한 경험을 공유해주세요(선택)"
          className="bg-red-gray-30 typo-title-14-regular scrollbar-hide h-[150px] w-full resize-none rounded-[6px] p-[10px] text-gray-900 outline-hidden placeholder:text-gray-500"
        />
      </PaddingWrapper>
    </div>
  );
};

export default ContentSection;
