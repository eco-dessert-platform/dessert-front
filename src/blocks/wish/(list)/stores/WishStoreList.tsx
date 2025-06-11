'use client';

import SkeletonStoreList from '@/domains/store/components/SkeletonStoreCardList';
import StoreCard from '@/domains/store/components/StoreCard';
import useWishStoreListQuery from '@/domains/wish/queries/useWishStoreListQuery';
import { memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BbangleCryIcon from '@public/assets/icons/bbangle-cry.svg';

const WishStroeList = () => {
  const { data, hasNextPage, isLoading, fetchNextPage } = useWishStoreListQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <SkeletonStoreList />;
  }

  if (!data || data.length === 0)
    return (
      <div className="w-[360px] h-[360px] flex flex-col gap-[2px] mx-auto justify-center items-center">
        <BbangleCryIcon />
        <div className="text-[14px] text-gray-500">찜한 스토어가 없어요!</div>
      </div>
    );

  return (
    <div>
      {data.map(({ storeId, profile, introduce, storeName, isWished }) => (
        <StoreCard
          key={storeId}
          id={storeId}
          imgSrc={profile}
          title={storeName}
          desc={introduce}
          isWished={isWished}
        />
      ))}
      {hasNextPage && (
        <div ref={ref}>
          <SkeletonStoreList />
        </div>
      )}
    </div>
  );
};

export default memo(WishStroeList);
