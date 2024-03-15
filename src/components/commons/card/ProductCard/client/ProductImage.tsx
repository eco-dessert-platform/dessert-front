'use client';

import { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import { isLoggedInState } from '@/atoms/atom';
import usePopup from '@/commons/hooks/usePopup';
import { IProductType } from '@/commons/types/productType';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import ToastPop from '@/components/commons/ToastPop';

interface ProductImageProps {
  product: IProductType;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setProductId: Dispatch<SetStateAction<number | undefined>>;
}
export const ProductImage = ({ product, setIsModal, setProductId }: ProductImageProps) => {
  const { openPopup } = usePopup();
  const router = useRouter();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const handleClickHeart = (id: number) => (e: any) => {
    e.preventDefault();

    if (!isLoggedIn) return router.push('/');

    if (product.isWished) {
      openPopup(
        <ToastPop>
          <span>이미 찜한 상품 입니다.</span>
        </ToastPop>
      );
    } else {
      setIsModal(true);
      setProductId(id);
    }
  };

  return (
    <div
      className="w-full pb-[100%] bg-cover bg-center rounded-[6px] relative "
      style={{ backgroundImage: `url(${product.thumbnail})` }}
    >
      <div className="absolute bottom-[9px] right-[9px] ">
        <BtnHeart isLiked={product.isWished} onClick={handleClickHeart(product.boardId)} />
      </div>
    </div>
  );
};
