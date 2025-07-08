'use client';

import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import StarRating from '@/domains/review/components/common/StarRating';
import { IReviewWriteForm } from '@/domains/review/types/review';
import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import { attachPostPosition } from '@/shared/utils/attachPostPosition';

const StarRatingSection = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data } = useGetBoardDetailQuery(Number(productId));
  const { register, watch } = useFormContext<IReviewWriteForm>();

  return (
    <div className="mb-[28px] flex flex-col items-center">
      <PaddingWrapper className="typo-title-16-semibold text-center text-gray-900">
        {attachPostPosition(data?.boardTitle || 'OOO', '은')} 만족했나요?
      </PaddingWrapper>
      <StarRating
        {...register('rate', { required: true })}
        value={watch('rate')}
        starSize="large"
        editable
      />
    </div>
  );
};

export default StarRatingSection;
