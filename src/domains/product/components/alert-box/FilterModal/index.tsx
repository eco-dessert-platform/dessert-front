'use client';

import ButtonSection from '@/domains/product/components/alert-box/FilterModal/ButtonSection';
import CategorySection from '@/domains/product/components/alert-box/FilterModal/CategorySection';
import PriceSection from '@/domains/product/components/alert-box/FilterModal/PriceSection';
import TagsSection from '@/domains/product/components/alert-box/FilterModal/TagsSection';
import GrayDivider from '@/shared/components/GrayDivider';
import Modal from '@/shared/components/Modal';

import IsOrderAvailableCheckbox from './IsOrderAvailableCheckbox';


const FilterModal = () => (
  <Modal title="필터">
    <TagsSection  />
    <GrayDivider color="gray100" />
    <CategorySection  />
    <GrayDivider color="gray100" />
    <PriceSection  />
    <GrayDivider color="gray100" />
    <IsOrderAvailableCheckbox  />
    <ButtonSection />
  </Modal>
);

export default FilterModal;
