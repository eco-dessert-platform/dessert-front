'use client';

import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Button from '@/components/commons/button/client/Button';
import UpModalNewVer from '@/components/commons/modal/UpModalNewVer';
import useModal from '@/commons/hooks/useModal';
import CategorySection from './CategorySection';
import { categoryTempState, filterValueState, tagsTempState, priceTempState } from '../../../atoms';
import TagsSection from './TagsSection';
import PriceSection from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

function FilterModal() {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryTempState);
  const [selectedTags, setSelectedTags] = useRecoilState(tagsTempState);
  const [price, setPrice] = useRecoilState(priceTempState);
  const { closeModal } = useModal();

  const handleConfirm = () => {
    setFilterValue(prev => ({
      ...filterValue,
      category: selectedCategory ? selectedCategory : prev.category,
      tags: selectedTags ? selectedTags : prev.tags,
      price
    }));
    closeModal();
  };

  const handleCancel = () => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
    setPrice(filterValue.price);
    closeModal();
  };

  useEffect(() => {
    setSelectedCategory(filterValue.category);
    setSelectedTags(filterValue.tags);
  }, [filterValue, setSelectedCategory, setSelectedTags]);

  return (
    <UpModalNewVer title="필터">
      <CategorySection />
      <hr className="bg-gray-100" />
      <TagsSection />
      <hr className="bg-gray-100" />
      <PriceSection />
      <PaddingWrapper className="flex gap-[10px] justify-center items-center">
        <Button
          variants="primary-white"
          className="font-medium text-16 leading-150 tracking-tight-2"
          onClick={handleCancel}
        >
          취소
        </Button>
        <Button
          variants="primary-black"
          className="font-medium text-16 leading-150 tracking-tight-2 text-white"
          onClick={handleConfirm}
        >
          확인
        </Button>
      </PaddingWrapper>
    </UpModalNewVer>
  );
}

export default FilterModal;
