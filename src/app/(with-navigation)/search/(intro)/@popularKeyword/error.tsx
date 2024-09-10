'use client';

import { useEffect } from 'react';
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

  return (
    <div className="flex flex-col items-center typo-title-14-regular text-gray-500">
      <p>네트워크 문제로 일시적인 오류가 발생했어요.</p>
      <p>다시 시도해주세요.</p>
      <Button
        onClick={reset}
        variants="primary-white"
        className="flex gap-x-[2px] justify-center items-center mt-[16px] p-[16px] w-[149px] typo-title-16-medium"
      >
        <RefreshIcon />
        새로고침
      </Button>
    </div>
  );
};

export default PopularKeywordError;
