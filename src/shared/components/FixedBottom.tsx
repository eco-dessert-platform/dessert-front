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

  return null;
};

export default FixedBottom;
