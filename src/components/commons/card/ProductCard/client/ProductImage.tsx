import useToast from '@/commons/hooks/useToast';
import { IProductType } from '@/commons/types/productType';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import { useDeleteWishMutation } from '@/components/commons/card/ProductCard/hooks/useDeleteWishMutation';
import ToastPop from '@/components/commons/toasts/ToastPop';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

interface ProductImageProps {
  product: IProductType;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setProductId: Dispatch<SetStateAction<number | undefined>>;
}
export const ProductImage = ({ product, setIsModal, setProductId }: ProductImageProps) => {
  const { openToast } = useToast();

  const { mutate: deleteWishMutate } = useDeleteWishMutation();

  const handleClickHeart = (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (product.isWished) {
      deleteWishMutate(id, {
        onSuccess: () => {
          openToast(<ToastPop content="찜한 상품이 삭제 되었습니다." />);
        }
      });
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
