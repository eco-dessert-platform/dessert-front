'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetAllStoresQuery } from '../../hooks/useGetAllStoresQuery';
import Loading from '@/components/commons/Loading';
import StoreCard from '@/domains/store/components/StoreCard';

function StoresTab() {
  const { stores, isError, isLoading, fetchNextPage, isFetchingNextPage } = useGetAllStoresQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="p-[16px]">
        <Loading />
      </div>
    );
  }
  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <div className="w-full">
      {stores &&
        stores.map(({ introduce, storeId, storeName, isWished, profile }) => (
          <StoreCard
            key={storeId}
            id={storeId}
            title={storeName}
            desc={introduce}
            isWished={isWished}
            imgSrc={profile}
          />
        ))}
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </div>
  );
}

export default StoresTab;