'use client';

import { IReviewCreateForm } from '@/domains/review/types/review';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues?: DefaultValues<IReviewCreateForm>;
}

const ReviewFormProvider = ({ children, defaultValues }: Props) => {
  const { productId } = useParams<{ productId: string }>();

  const methods = useForm<IReviewCreateForm>({
    defaultValues: defaultValues || {
      rate: 0,
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
    }
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ReviewFormProvider;
