import { IReviewCreateForm } from '@/domains/review/types/review';
import { useParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const ReviewFormProvider = ({ children }: PropsWithChildren) => {
  const { productId } = useParams<{ productId: string }>();

  const methods = useForm<IReviewCreateForm>({
    defaultValues: {
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
