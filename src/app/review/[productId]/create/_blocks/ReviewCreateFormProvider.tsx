'use client';

import { useParams } from 'next/navigation';
import { RatingType } from '@/domains/review/types/starRating';
import { FormProvider, useForm } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';

interface Props {
  children: React.ReactNode;
}

const ReviewCreateFormProvider = ({ children }: Props) => {
  const { productId } = useParams();

  if (!productId) throw new Error('productId is invalid');

  const defaultValues = {
    rate: 0 as RatingType,
    badges: {
      texture: undefined,
      brix: undefined,
      taste: undefined
    },
    content: '',
    boardId: Number(productId),
    images: {
      files: undefined,
      urls: []
    }
  };

  const methods = useForm<IReviewWriteForm>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ReviewCreateFormProvider;
