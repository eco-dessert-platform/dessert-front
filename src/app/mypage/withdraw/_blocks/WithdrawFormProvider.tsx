'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { WithdrawFormType } from '@/domains/user/types/profile';

interface Props {
  children: React.ReactNode;
  defaultValues: WithdrawFormType;
}

const WithdrawFormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default WithdrawFormProvider;
