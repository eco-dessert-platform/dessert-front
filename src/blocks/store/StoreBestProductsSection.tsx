'use client';

import { useGetStoreBestProductsQuery } from '@/domains/store/queries/useGetStoreBestProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductCard from '@/domains/product/components/ProductCard';

interface Props {
  storeId: number;
}

const StoreBestProductsSection = ({ storeId }: Props) => {
  const { data } = useGetStoreBestProductsQuery({ storeId });

  return (
    <PaddingWrapper>
      <h5 className="text-gray-800 text-14 mb-[10px] font-semibold">인기상품</h5>
      <div className="flex w-full flex-wrap m-auto gap-x-[3%] gap-y-2">
        {data?.map((item, i) => (
          <div key={item.boardId} className="w-[31%]">
            <ProductCard product={item} popular ranking={Number(i + 1)} />
          </div>
        ))}
      </div>
    </PaddingWrapper>
  );
};

export default StoreBestProductsSection;
