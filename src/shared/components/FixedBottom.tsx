'use client';

import { useEffect } from 'react';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { fixedBottomState } from '@/shared/atoms/fixedBottom';

interface Props {
  children: React.ReactNode;
}

const FixedBottom = ({ children }: Props) => {
  const setFixedBottom = useSetRecoilState(fixedBottomState);
  const resetFixedBottom = useResetRecoilState(fixedBottomState);

  useEffect(() => {
    setFixedBottom(children);
    return resetFixedBottom;
  }, [setFixedBottom, resetFixedBottom, children]);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[5001] max-w-[600px] w-full">
      {children}
    </div>
  );
};

export default FixedBottom;
