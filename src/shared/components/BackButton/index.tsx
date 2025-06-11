'use client';

import { useRouter } from 'next/navigation';

import ArrowIcons from '../icons/ArrowIcons';

const BackButton = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  return (
    <button
      type="button"
      className="my-[6px] mr-[17px]"
      onClick={goBackHandler}
      aria-label="back button"
    >
      <ArrowIcons shape="back" />
    </button>
  );
};

export default BackButton;
