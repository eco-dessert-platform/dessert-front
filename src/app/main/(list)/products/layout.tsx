'use client';

import { useRecoilValue } from 'recoil';

import { mainCategoryState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import Header from '@/shared/components/Header';

const MainListLayout = ({ children }: { children: React.ReactNode }) => {
  const mainCategory = useRecoilValue(mainCategoryState(FILTER_FAMILY_ID.main));
  return (
    <>
      <Header title={mainCategory} back />
      {children}
    </>
  );
};

export default MainListLayout;
