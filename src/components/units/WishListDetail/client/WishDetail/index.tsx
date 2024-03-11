'use client';

import Loading from '@/components/commons/Loading';
import ProductCard from '@/components/commons/card/ProductCard';
import WishListSortSelect from '@/components/commons/selects/WishListSortSelect';
import { useWishProductListQuery } from '@/components/units/WishListDetail/hooks/useWishProductsListQuery';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface WishDetailProps {
  folderId: number;
}

const WishDetail = ({ folderId }: WishDetailProps) => {
  const [sort, setSort] = useState('담은순');

  const changeSortValue = (value: string) => {
    if (value === '담은순') {
      return 'recent';
    } else if (value === '저가순') {
      return 'low-price';
    } else {
      return 'popular';
    }
  };

  const { wishProductList, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useWishProductListQuery(folderId, changeSortValue(sort));

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <div className="w-[92%] m-auto">
      <div className="mb-5">
        <WishListSortSelect sort={sort} setSort={setSort} />
      </div>
      <div className="flex flex-wrap w-full  m-auto gap-x-[4%] gap-y-4">
        {wishProductList?.map((product, i) => (
          <div key={i} className="w-[48%]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
      {wishProductList?.length === 0 && (
        <div className="absolute w-full text-center text-gray-700 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          찜한 상품이 존재하지 않습니다.
        </div>
      )}
    </div>
  );
};

export default WishDetail;
