'use client';

import { MouseEventHandler } from 'react';

import { useRecoilValue } from 'recoil';

import { selectedWishFolderState } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import HeartButton from '@/shared/components/HeartButton';
import ButtonNewver from '@/shared/components/ButtonNewver';
import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import { useParams } from 'next/navigation';

const FixedPurchaseButtonSection = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectedWishFolder = useRecoilValue(selectedWishFolderState);

  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();
  const { data: boardData } = useGetBoardDetailQuery(Number(productId));

  if (!boardData) return 'data not found';

  const addToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    addMutate({ productId: boardData.boardId, folderId: selectedWishFolder });
    e.preventDefault();
  };

  const deleteToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteMutate({ productId: boardData.boardId });
    e.preventDefault();
  };

  const gotoPurchaseUrl = () => {
    window.open(boardData.purchaseUrl, '_blank');
  };

  return (
    <div className="bg-white max-w-[600px] w-full mx-auto p-[16px] flex items-center gap-[10px]">
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
