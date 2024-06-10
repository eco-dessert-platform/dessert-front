import React from 'react';

import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface Props {
  option: any;
  onClick: () => void;
}

const CategoryOption = ({ option, onClick }: Props) => (
  <PaddingWrapper className="border-b border-gray-100 typo-title-14-regular text-gray-800 ">
    <button type="button" onClick={onClick} className="flex items-center justify-between w-full">
      {option.title}
      <ArrowIcons shape="large-down" />
    </button>
  </PaddingWrapper>
);

export default CategoryOption;
