import useToast from '@/commons/hooks/useToast';
import { IProductType } from '@/commons/types/productType';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import { useDeleteWishMutation } from '@/components/commons/card/ProductCard/hooks/useDeleteWishMutation';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import ToastPop from '@/components/commons/ToastPop';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import { RankingBadge } from '../../../badge/RankingBadge';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setProductId: Dispatch<SetStateAction<number | undefined>>;
}
export const ProductImage = ({
  product,
  popular,
  ranking,
  setIsModal,
  setProductId
}: ProductImageProps) => {
  const { openToast } = useToast();

  const { mutate: deleteWishMutate } = useDeleteWishMutation();

  const handleClickHeart = (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (product.isWished) {
      deleteWishMutate(id, {
        onSuccess: () => {
          openToast(
            <ToastPop>
              <span>찜한 상품이 삭제 되었습니다.</span>
            </ToastPop>
          );
        }
      });
    } else {
      setIsModal(true);
      setProductId(id);
    }
  };

  return (
    <div
      className="w-full pb-[100%] bg-cover bg-center rounded-[6px] relative"
      style={{ backgroundImage: `url(${product.thumbnail})` }}
    >
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        <BtnHeart isLiked={product.isWished} onClick={handleClickHeart(product.boardId)} />
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex gap-[6px]">
        {popular && <RankingBadge ranking={ranking} />}
        {product.isBundled && <BundleBadge />}
      </div>
    </div>
  );
};
