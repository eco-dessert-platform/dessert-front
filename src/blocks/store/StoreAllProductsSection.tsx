'use client';

import { useGetStoreAllProductsQuery } from '@/domains/store/queries/useGetStoreAllProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductCard from '@/domains/product/components/ProductCard';

interface Props {
  storeId: number;
}

// infinite fetching 구현해야함

const StoreAllProductsSection = ({ storeId }: Props) => {
  const { data } = useGetStoreAllProductsQuery({ storeId });

  return (
    <PaddingWrapper>
      <h5 className="text-gray-800 text-14 mb-[10px] font-semibold">전체상품</h5>
      <div className="flex w-full flex-wrap m-auto gap-x-[4%] gap-y-4">
        {data?.map((item) => (
          <div key={item.boardId} className="w-[48%]">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </PaddingWrapper>
  );
};

export default StoreAllProductsSection;
