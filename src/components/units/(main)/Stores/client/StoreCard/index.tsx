import BtnStar from '@/components/commons/button/client/Btn_start';
import { useAddWishStoreMutation } from '@/components/units/(main)/Stores/hooks/useAddWishStoreMutation';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { useDeleteWishStoreMutation } from '@/components/units/(main)/Stores/hooks/useDeleteWishStoreMutation';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { revalidateTag } from 'next/cache';
import PaddingWrapper from '@/components/commons/PaddingWrapper';


const StoreCard = ({ data, isWished }) => {
  const { mutate: addWishStore } = useAddWishStoreMutation();
  const { mutate: deleteWishStore } = useDeleteWishStoreMutation();
  const { openToast } = useToast();

  const handleAddWishStore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      addWishStore(
        { storeId: data.storeId },
        {
          onSuccess: () => {
            openToast(
              <ToastPop>
                <span>💖 스토어가 찜 목록에 추가 되었습니다.</span>
              </ToastPop>
            );
            revalidateTag('storeWish');
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteWishStore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      deleteWishStore(
        { storeId: data.storeId },
        {
          onSuccess: () => {
            openToast(
              <ToastPop>
                <span>스토어가 찜 목록에서 삭제 되었습니다.</span>
              </ToastPop>
            );
            revalidateTag('storeWish');
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link href={`/stores/${data.storeId}`}>
      <PaddingWrapper className="flex justify-between items-center gap-[10px] w-full border-b border-gray-100 border-solid">
        <div
          className="flex-none w-[40px] h-[40px] rounded-[6px] bg-cover bg-center"
          style={{ backgroundImage: `url(${data?.profile})` }}
        />
        <div className="flex-1 overflow-auto">
          <div className="flex justify-between items-center gap-[4px]">
            <h4 className="text-14 font-semibold text-gray-900 leading-150 tracking-tight-2 truncate">
              {data.storeName}
            </h4>
            <BtnStar className="flex-none" isLiked={false} onClick={handleAddWishStore} />
          </div>
          <div className="text-12 font-normal text-gray-600 leading-130 tracking-tight-2 truncate">
            {data.introduce}
          </div>
        </div>
      </PaddingWrapper>
    </Link>
  );
};

export default StoreCard;
