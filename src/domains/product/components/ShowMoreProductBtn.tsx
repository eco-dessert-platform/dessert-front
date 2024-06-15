'use client';

import { useState } from 'react';

import PaddingWrapper from '@/shared/components/PaddingWrapper';

import MoreButton from '../../../shared/components/MoreButton';
import { ProductOptionResponse } from '../types/productDetailType';

interface DetailBoardInfoProps {
  data: ProductOptionResponse;
}

const ShowMoreProductBtn = ({ data }: DetailBoardInfoProps) => {
  const [clickMore, setClickMore] = useState(false);

  return (
    <PaddingWrapper>
      <div
        className={`flex relative flex-col gap-[16px] py-[16px] ${
          clickMore ? 'overflow-y-visible ' : 'overflow-y-hidden h-[271px]'
        }`}
      >
        {data.products.length > 2 && (
          <MoreButton
            isMore={clickMore}
            onClick={() => {
              setClickMore(!clickMore);
            }}
          />
        )}
      </div>
    </PaddingWrapper>
  );
};

export default ShowMoreProductBtn;
