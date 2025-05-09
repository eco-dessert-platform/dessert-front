'use client';

import { useFormContext } from 'react-hook-form';

import Input from '@/shared/components/Input';

const BirthdateInput = () => {
  const { register } = useFormContext();

  return (
    <Input type="date" required label="생년월일" {...register('birthDate')} max="9999-12-31" />
  );
};

export default BirthdateInput;
