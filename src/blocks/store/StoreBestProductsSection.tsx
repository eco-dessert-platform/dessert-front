'use client';

import { useGetStoreBestProductsQuery } from '@/domains/store/queries/useGetStoreBestProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductCard from '@/domains/product/components/ProductCard';

interface Props {
  storeId: number;
}

const StoreBestProductsSection = ({ storeId }: Props) => {
  const { data } = useGetStoreBestProductsQuery({ storeId });

  if (!data) return null;

  return (
    <PaddingWrapper>
      <h5 className="mb-[10px] typo-title-14-semibold text-gray-800">인기상품</h5>
      <div className="grid grid-cols-3 gap-x-[10px]">
        {data?.map((item, i) => (
          <div key={item.boardId}>
            <ProductCard product={item} popular ranking={Number(i + 1)} />
          </div>
        ))}
      </div>
    </PaddingWrapper>
  );
};

export default StoreBestProductsSection;
