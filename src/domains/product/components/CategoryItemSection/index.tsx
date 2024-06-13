'use client';

import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

import useToggle from '@/shared/hooks/useToggle';

import MainCategoryItem from './MainCategoryItem';
import SubcategoryList from './SubCategoryList';

interface CategoryItemProps {
  shape: string;
  title: string;
  subCategories: string[];
}

const CategoryItemSection = ({ shape, title, subCategories }: CategoryItemProps) => {
  const router = useRouter();

  const { isActive, toggle } = useToggle();

  const handleCategoryClick = () => {
    toggle();
    if (subCategories.length === 0) {
      router.push('/products');
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
