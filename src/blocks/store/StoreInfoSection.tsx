'use client';

import Image from 'next/image';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import StarButton from '@/shared/components/StarButton';
import useAddWishStoreMutation from '@/domains/wish/queries/useAddWishStoreMutation';
import useDeleteWishStoreMutation from '@/domains/wish/queries/useDeleteWishStoreMutation';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useAtom } from 'jotai';
import { isLoggedinAtom } from '@/shared/atoms/login';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { useGetStoreInfoQuery } from '@/domains/store/queries/useGetStoreInfoQuery';

interface Props {
  storeId: number;
}

const StoreInfoSection = ({ storeId }: Props) => {
  const { data: storeInfo } = useGetStoreInfoQuery({ storeId });
  const [isLoggedIn] = useAtom(isLoggedinAtom);
  const isLiked = storeInfo?.isWished || false;

  const { mutate: addMutate } = useAddWishStoreMutation({
    storeId,
    storeName: storeInfo?.storeName ?? '🏠'
  });
  const { mutate: deleteMutate } = useDeleteWishStoreMutation({
    storeId,
    storeName: storeInfo?.storeName ?? '🏠'
  });
  const { openToast } = useToastNewVer();

  if (!storeInfo) return null;

  const wishMutate = isLiked ? deleteMutate : addMutate;
  const handleWish = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoggedIn) {
      wishMutate();
    } else {
      openToast({ message: ERROR_MESSAGE.requiredLogin });
    }
    e.preventDefault();
  };

  return (
    <PaddingWrapper className="pt-0">
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <Image
          src={storeInfo.profile}
          alt="스토어 이미지"
          width={46}
          height={46}
          className="rounded-[6px]"
        />
        <div className="flex flex-col items-center gap-[4px]">
          <div className="flex items-center gap-[2px]">
            <h2 className="typo-title-16-semibold text-gray-900">{storeInfo.storeName}</h2>
            <StarButton isActive={isLiked} onClick={(e) => handleWish(e)} />
          </div>
          <p className="typo-body-12-regular">{storeInfo.introduce}</p>
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default StoreInfoSection;
