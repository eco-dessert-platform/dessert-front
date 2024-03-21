'use client';

import { useRouter } from 'next/navigation';
import Back from '@/components/commons/header/assets/back_arrow.svg';

const BtnBack = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  return (
    <button className="mr-[17px] my-[6px]" onClick={goBackHandler}>
      <Back />
    </button>
  );
};

export default BtnBack;
