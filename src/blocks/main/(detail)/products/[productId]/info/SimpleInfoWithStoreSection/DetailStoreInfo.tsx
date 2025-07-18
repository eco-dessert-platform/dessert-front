'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAtom } from 'jotai';

import { useGetStoreInfoQuery } from '@/domains/store/queries/useGetStoreInfoQuery';
import useAddWishStoreMutation from '@/domains/wish/queries/useAddWishStoreMutation';
import useDeleteWishStoreMutation from '@/domains/wish/queries/useDeleteWishStoreMutation';
import { isLoggedinAtom } from '@/shared/atoms/login';
import HeartButton from '@/shared/components/HeartButton';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

interface Props {
  storeId: number;
}

const DetailStoreInfo = ({ storeId }: Props) => {
  const { data: storeData } = useGetStoreInfoQuery({ storeId });
  const { mutate: addMutate } = useAddWishStoreMutation({
    storeId,
    storeName: storeData?.storeName ?? '🏠'
  });
  const { mutate: deleteMutate } = useDeleteWishStoreMutation({
    storeId,
    storeName: storeData?.storeName ?? '🏠'
  });

  const [isLoggedIn] = useAtom(isLoggedinAtom); // Use Jotai atom to get login state
  const { openToast } = useToastNewVer();

  if (!storeData) return <PaddingWrapper>스토어 정보를 찾을 수 없어요.</PaddingWrapper>;

  const wishMutate = storeData.isWished ? deleteMutate : addMutate;

  const handleWish = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoggedIn) {
      wishMutate();
    } else {
      openToast({ message: ERROR_MESSAGE.requiredLogin });
    }
    e.preventDefault();
  };

  return (
    <Link href={PATH.mainStoreDetail(storeData.storeId)} className="w-full">
      <PaddingWrapper className="flex items-center justify-between border-b border-gray-100 py-[10px]">
        <div className="flex items-center gap-[6px]">
          <div className="overflow-hidden rounded-full">
            <Image src={storeData.profile} width={24} height={24} alt="설명" />
          </div>
          <div className="text-14 text-gray-600">{storeData.storeName}</div>
        </div>
        <HeartButton shape="default" isActive={storeData.isWished} onClick={(e) => handleWish(e)} />
      </PaddingWrapper>
    </Link>
  );
};

export default DetailStoreInfo;
