'use client';

import Button from '@/shared/components/Button';
import { IProductDetailType } from '@/domains/product/types/productDetailType';
import HeartButton from '@/shared/components/HeartButton';

interface DetailFixedBtnSectionProps {
  data: IProductDetailType;
}

const DetailFixedBtnSection = ({ data }: DetailFixedBtnSectionProps) => {
  const handleClickHeart = () => {};

  const gotoPurchaseUrl = () => {
    window.open(data.board.purchaseUrl, '_blank');
  };

  return (
    <div className="bg-white z-[5000] max-w-[600px] w-full mx-auto p-[16px] fixed flex items-center gap-[10px] left-[0%] right-[0%] bottom-0 ">
      <div>
        <HeartButton isActive={data.board.isWished} onClick={handleClickHeart} />
      </div>
      <div className="flex-1">
        <Button onClick={gotoPurchaseUrl}>구매하러 가기</Button>
      </div>
    </div>
  );
};

export default DetailFixedBtnSection;
