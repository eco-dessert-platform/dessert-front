'use client';

import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import PATH from '@/shared/constants/path';
import useToggle from '@/shared/hooks/useToggle';

import { mainCategoryState, filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import MainCategoryItem from './MainCategoryItem';
import SubcategoryList from './SubCategoryList';

interface CategoryItemProps {
  shape: string;
  title: string;
  subCategories: string[];
}

const CategoryItemSection = ({ shape, title, subCategories }: CategoryItemProps) => {
  const router = useRouter();
  const setMainCategory = useSetRecoilState(mainCategoryState(FILTER_FAMILY_ID.main));
  const setFilterValue = useSetRecoilState(filterValueState(FILTER_FAMILY_ID.main));

  const { isActive, toggle } = useToggle(true);

  const handleCategoryClick = () => {
    toggle();
    setMainCategory(title);
    if (subCategories.length === 0) {
      setFilterValue(INIT_FILTER_VALUE);
      router.push(PATH.mainProductList);
    }
  };
  return (
    <>
      <MainCategoryItem
        shape={shape}
        title={title}
        hasSubCategory={subCategories.length > 0}
        onClick={handleCategoryClick}
      />
      <AnimatePresence>
        {/* 조건부는 AnimatePresence 안에 있어야 컴포넌트가 사라질 때도 애니메이션이 적용된다 */}
        {isActive && <SubcategoryList subCategories={subCategories} />}
      </AnimatePresence>
    </>
  );
};
export default CategoryItemSection;
