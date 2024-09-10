'use client';

import { PreferenceFormType } from '@/domains/user/types/preference';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: PreferenceFormType;
}

const PreferenceFormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<PreferenceFormType>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default PreferenceFormProvider;
