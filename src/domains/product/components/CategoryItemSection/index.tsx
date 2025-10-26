'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import { mainCategoryAtom } from '@/domains/product/atoms';
import PATH from '@/shared/constants/path';
import useToggle from '@/shared/hooks/useToggle';
import { useFilter } from '@/shared/hooks/useFilter';
import MainCategoryItem from './MainCategoryItem';
import SubcategoryList from './SubCategoryList';
import { FILTER_FAMILY_ID } from '../../constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '../../constants/filterValues';

interface CategoryItemProps {
  shape: string;
  title: string;
  subCategories: string[];
}

const CategoryItemSection = ({ shape, title, subCategories }: CategoryItemProps) => {
  const router = useRouter();

  const [, setMainCategory] = useAtom(mainCategoryAtom);
  const [, setFilterValue] = useFilter(FILTER_FAMILY_ID.main);

  const { isActive, toggle } = useToggle(true);

  const handleCategoryClick = () => {
    toggle();
    setFilterValue(INIT_FILTER_VALUE);
    setMainCategory(title);
    if (subCategories.length === 0) {
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
