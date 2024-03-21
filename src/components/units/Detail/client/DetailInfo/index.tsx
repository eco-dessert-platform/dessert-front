'use client';

import { IProductDetailType } from '../../types';
import StoreInfo from '../StoreInfo';
import BoardInfo from '../BoardInfo';
import Button from '@/components/commons/button/client/Button';
import ToastPop from '@/components/commons/ToastPop';
import { MouseEvent, useState } from 'react';
import { ChooseWishListModal } from '@/components/commons/card/ProductCard/client/ChooseWishListModal';
import useToast from '@/commons/hooks/useToast';
import Image from 'next/image';
import BtnOutlinedHeart from '@/components/commons/button/client/Btn_outlined_heart';
import GrayDivider from '@/components/commons/divider/GrayDivider';

interface ProductInfoProps {
  data: IProductDetailType;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  const [isModal, setIsModal] = useState(false);
  const [productId, setProductId] = useState<number>();
  const { openToast } = useToast();

  const handleClickHeart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (data.board.isWished) {
      openToast(
        <ToastPop>
          <div>이미 찜한 상품 입니다.</div>
        </ToastPop>
      );
    } else {
      setIsModal(true);
      setProductId(data.board.boardId);
    }
  };

  const gotoPurchaseUrl = () => {
    window.open(data.board.purchaseUrl, '_blank');
  };

  return (
    <>
      <div className="container flex-col flex-wrap w-full">
        <StoreInfo store={data.store} />
        <GrayDivider />
        <BoardInfo data={data} />
        <div className="w-full">
          <Image
            src={'https://bbangree-oven.cdn.ntruss.com/1/1/1.jpg'}
            alt="상세"
            width={0}
            height={0}
            sizes="100vw"
            className=" m-auto"
            style={{ width: '100% ', padding: 0, margin: 0, marginBottom: '100px' }}
          />{' '}
        </div>
      </div>

      <div className="bg-white z-[5000] w-full max-w-[600px] mx-auto p-[16px] fixed flex items-center gap-[10px] left-[0%] right-[0%] bottom-0 ">
        <div>
          <BtnOutlinedHeart isLiked={data.board.isWished} onClick={handleClickHeart} />
        </div>
        <div className="flex-1">
          <Button onClick={gotoPurchaseUrl}>구매하러 가기</Button>
        </div>
      </div>
      {isModal && (
        <ChooseWishListModal isModal={isModal} setIsModal={setIsModal} productId={productId} />
      )}
    </>
  );
};

export default ProductInfo;
