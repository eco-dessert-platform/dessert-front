'use client';

import { RecommendationType } from '@/domains/user/types/recommendation';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: RecommendationType;
}

const RecommendationFormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<RecommendationType>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default RecommendationFormProvider;
