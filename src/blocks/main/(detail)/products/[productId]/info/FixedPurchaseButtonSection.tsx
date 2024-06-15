'use client';

import { MouseEventHandler } from 'react';

import { useRecoilValue } from 'recoil';

import { IBoardDetailType } from '@/domains/product/types/productDetailType';
import { selectedWishFolderState } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import HeartButton from '@/shared/components/HeartButton';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface DetailFixedBtnSectionProps {
  boardData: IBoardDetailType;
}

const FixedPurchaseButtonSection = ({ boardData }: DetailFixedBtnSectionProps) => {
  const selectedWishFolder = useRecoilValue(selectedWishFolderState);

  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();

  const addToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    addMutate({ productId: boardData.id, folderId: selectedWishFolder });
    e.preventDefault();
  };

  const deleteToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
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
          isActive={boardData.isWished}
          onClick={boardData.isWished ? deleteToWishlist : addToWishlist}
        />
      </div>
      <div className="flex-1">
        <ButtonNewver color="black" className="w-full" size="lg" onClick={gotoPurchaseUrl}>
          구매하러 가기
        </ButtonNewver>
      </div>
    </div>
  );
};

export default FixedPurchaseButtonSection;
