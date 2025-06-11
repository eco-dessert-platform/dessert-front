'use client';

import { useRouter } from 'next/navigation';
import { useEffect, startTransition } from 'react';
import Button from '@/shared/components/Button';
import { RefreshIcon } from '@/shared/components/icons';

const PopularKeywordError = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();

  const handleReset = () => {
    // todo 이부분 애러처리 꿔야 할거 같다. > 일괄적으로 reset 만으로 동작하게끔
    startTransition(() => {
      reset();
      router.refresh();
    });
  };

  return (
    <div className="typo-title-14-regular flex flex-col items-center text-gray-500">
      <p>네트워크 문제로 일시적인 오류가 발생했어요.</p>
      <p>다시 시도해주세요.</p>
      <Button
        onClick={handleReset}
        variants="primary-white"
        className="typo-title-16-medium mt-[16px] flex w-[149px] items-center justify-center gap-x-[2px] p-[16px]"
      >
        <RefreshIcon />
        새로고침
      </Button>
    </div>
  );
};

export default PopularKeywordError;
