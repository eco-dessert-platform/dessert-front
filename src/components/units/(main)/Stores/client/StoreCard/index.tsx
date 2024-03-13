import useToast from '@/commons/hooks/useToast';
import BtnStar from '@/components/commons/button/client/Btn_start';
import { useAddWishStoreMutation } from '@/components/units/(main)/Stores/hooks/useAddWishStoreMutation';
import ToastPop from '@/components/commons/toasts/ToastPop';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { MouseEvent } from 'react';

const StoreCard = ({ data, isWished }: any) => {
  const { mutate } = useAddWishStoreMutation();
  const { openToast } = useToast();

  const handleAddWishStore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      mutate(
        { storeId: data.storeId },
        {
          onSuccess: () => {
            openToast(<ToastPop content="💖 스토어가 찜 목록에 추가 되었습니다." isAddWish />);
            revalidateTag('storeWish');
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link href="/stores/1">
      <div className="flex flex-col justify-between w-full py-5 m-auto border-b border-gray-100 border-solid ">
        <div className="flex  justify-between w-[92%] m-auto items-center gap-[10px] ">
          <div
            className="w-[40px] h-[40px] rounded-md bg-cover bg-center flex flex-shrink-0"
            style={{ backgroundImage: `url(${data.profile})` }}
          ></div>
          <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
            <div className="inline-flex items-center self-stretch justify-start gap-1">
              <div className="text-sm font-semibold grow shrink basis-0 text-neutral-800 ">
                {data.storeName}
              </div>
              <BtnStar isLiked={isWished ? isWished : data.isLiked} onClick={handleAddWishStore} />
            </div>
            <div className="text-xs font-normal text-neutral-500">{data.introduce}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StoreCard;
