'use client';

import { MouseEventHandler, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { IBoardDetailType } from '@/domains/product/types/productDetailType';
import { selectedWishFolderState } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import Button from '@/shared/components/Button';
import HeartButton from '@/shared/components/HeartButton';

interface DetailFixedBtnSectionProps {
  boardData: IBoardDetailType;
}

const FixedPurchaseButtonSection = ({ boardData }: DetailFixedBtnSectionProps) => {
  const [isLiked, setIsLiked] = useState(boardData.isWished);

  const selectedWishFolder = useRecoilValue(selectedWishFolderState);

  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();

  const addToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsLiked((prev) => !prev);
    addMutate({ productId: boardData.id, folderId: selectedWishFolder });
    e.preventDefault();
  };

  const deleteToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsLiked((prev) => !prev);
    deleteMutate({ productId: boardData.id });
    e.preventDefault();
  };

  const gotoPurchaseUrl = () => {
    window.open(boardData.purchaseUrl, '_blank');
  };

  return (
    <div className="bg-white z-[5000] max-w-[600px] w-full mx-auto p-[16px] fixed flex items-center gap-[10px] left-[0%] right-[0%] bottom-0 ">
      <div>
        <HeartButton
          shape="default"
          isActive={isLiked}
          onClick={isLiked ? deleteToWishlist : addToWishlist}
        />
      </div>
      <div className="flex-1">
        <Button onClick={gotoPurchaseUrl}>구매하러 가기</Button>
      </div>
    </div>
  );
};

export default FixedPurchaseButtonSection;
