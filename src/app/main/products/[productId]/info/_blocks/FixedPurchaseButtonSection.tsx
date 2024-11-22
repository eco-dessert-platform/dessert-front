'use client';

import { MouseEventHandler, useEffect } from 'react';

import { useRecoilValue } from 'recoil';

import { selectedWishFolderState } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import HeartButton from '@/shared/components/HeartButton';
import ButtonNewver, { buttonVariants } from '@/shared/components/ButtonNewver';
import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/shared/utils/cn';
import useModal from '@/shared/hooks/useModal';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Modal from '@/shared/components/Modal';
import ProductCard from '@/domains/product/components/ProductCard';
import useGetSimilarProductsQuery from '@/domains/product/queries/useGetSimilarProducts';

import { isLoggedinState } from '@/shared/atoms/login';

const FixedPurchaseButtonSection = () => {
  const { productId } = useParams<{ productId: string }>();
  const { openModal, closeModal, modal } = useModal();
  const pathname = usePathname();
  const selectedWishFolder = useRecoilValue(selectedWishFolderState);

  const isLoggedIn = useRecoilValue(isLoggedinState);

  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();
  const { data: similarProducts } = useGetSimilarProductsQuery(Number(productId));
  const { data: boardData } = useGetBoardDetailQuery(Number(productId));

  useEffect(() => {
    if (modal) {
      closeModal();
    }
  }, [pathname]);

  if (!boardData) return 'data not found';
  if (!similarProducts) return null;

  const addToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    addMutate({ productId: boardData.boardId, folderId: selectedWishFolder });
    if (isLoggedIn) {
      setTimeout(() => {
        openModal(
          <Modal title="이런 건강 디저트는 어때요?">
            <PaddingWrapper className="py-[16px] flex flex-col gap-y-[10px]">
              <div className="grid grid-cols-3 gap-[16px]">
                {similarProducts.map((item) => (
                  <ProductCard key={item.boardId} product={item} isSimilarProduct />
                ))}
              </div>
            </PaddingWrapper>
          </Modal>
        );
      }, 500);
    }
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
      <HeartButton
        shape="default"
        isActive={boardData.isWished}
        onClick={boardData.isWished ? deleteToWishlist : addToWishlist}
        className={cn(
          buttonVariants({ size: 'lg', color: 'border-white', radius: 'round' }),
          'min-w-max w-[56px] p-0'
        )}
      />
      <div className="flex-1">
        <ButtonNewver color="black" className="w-full" size="lg" onClick={gotoPurchaseUrl}>
          구매하러 가기
        </ButtonNewver>
      </div>
    </div>
  );
};

export default FixedPurchaseButtonSection;
