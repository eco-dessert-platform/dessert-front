import { WishStore } from '@/components/units/WishListDetail/types';
import BtnStar from '@/components/commons/button/client/Btn_start';
import { useAddWishStoreMutation } from '@/components/units/(main)/Stores/hooks/useAddWishStoreMutation';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '@/commons/utils/isLoggedIn';

const StoreCard = ({ data }: { data: WishStore }) => {
  const { mutate } = useAddWishStoreMutation();
  const router = useRouter();

  const handleAddWishStore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isLoggedIn()) return router.push('/login');

    mutate(data.storeId);
  };

  return (
    <Link href="/stores/1">
      <div className="flex flex-col justify-between w-full py-5 m-auto border-b border-gray-100 border-solid ">
        <div className="flex  justify-between w-[92%] m-auto items-center gap-[10px] ">
          <div
            className="w-[40px] h-[40px] rounded-md bg-cover bg-center flex flex-shrink-0"
            // style={{ backgroundImage: `url(${data.profile})` }}
          ></div>
          <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
            <div className="inline-flex items-center self-stretch justify-start gap-1">
              <div className="text-sm font-semibold grow shrink basis-0 text-neutral-800 ">
                {data.storeName}
              </div>
              <BtnStar isLiked={false} onClick={handleAddWishStore} />
            </div>
            <div className="text-xs font-normal text-neutral-500">{data.introduce}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StoreCard;
