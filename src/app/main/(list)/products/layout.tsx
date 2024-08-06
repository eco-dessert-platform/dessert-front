'use client';

import { useRecoilValue } from 'recoil';

import { categoryValueState } from '@/domains/product/atoms';
import Header from '@/shared/components/Header';

const MainListLayout = ({ children }: { children: React.ReactNode }) => {
  const categoryValue = useRecoilValue(categoryValueState);
  return (
    <>
      <Header title={categoryValue} back />
      {children}
    </>
  );
};

export default MainListLayout;
