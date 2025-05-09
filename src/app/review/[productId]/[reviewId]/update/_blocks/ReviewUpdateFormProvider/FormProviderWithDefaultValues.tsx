'use client';

import { IReviewWriteForm } from '@/domains/review/types/review';
import { ReactNode } from 'react';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';

interface Props {
  defaultValues: DefaultValues<IReviewWriteForm>;
  children: ReactNode;
}

const FormProviderWithDefaultValues = ({ defaultValues, children }: Props) => {
  const methods = useForm<IReviewWriteForm>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormProviderWithDefaultValues;
