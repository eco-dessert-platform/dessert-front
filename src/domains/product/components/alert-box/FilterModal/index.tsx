'use client';

import ButtonSection from '@/domains/product/components/alert-box/FilterModal/ButtonSection';
import PriceSection from '@/domains/product/components/alert-box/FilterModal/PriceSection';
import TagsSection from '@/domains/product/components/alert-box/FilterModal/TagsSection';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import GrayDivider from '@/shared/components/GrayDivider';
import Modal from '@/shared/components/Modal';

import IsOrderAvailableCheckbox from './IsOrderAvailableCheckbox';

interface FilterModalProps {
  filterFamilyId: FilterFamilyIDType;
}

const FilterModal = ({ filterFamilyId }: FilterModalProps) => (
  <Modal title="필터">
    <TagsSection filterFamilyId={filterFamilyId} />
    <GrayDivider color="gray100" />
    <PriceSection filterFamilyId={filterFamilyId} />
    <GrayDivider color="gray100" />
    <IsOrderAvailableCheckbox filterFamilyId={filterFamilyId} />
    <ButtonSection filterFamilyId={filterFamilyId} />
  </Modal>
);

export default FilterModal;
