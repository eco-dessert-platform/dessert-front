'use client';

import { useGetStoreInfoQuery } from '@/domains/store/queries/useGetStoreInfoQuery';
import { useGetStoreBestProductsQuery } from '@/domains/store/queries/useGetStoreBestProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductCard from '@/domains/product/components/ProductCard';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

interface Props {
  storeId: number;
}

const StoreBestProductsSection = ({ storeId }: Props) => {
  const { data: products } = useGetStoreBestProductsQuery({ storeId });
  const { data: storeInfo } = useGetStoreInfoQuery({ storeId });

  if (!storeInfo || !products || products.length === 0) {
    return (
      <SadBbangleBox>
        <p>인기 상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper>
      <h5 className="mb-[10px] typo-title-14-semibold text-gray-800">인기상품</h5>
      <div className="grid grid-cols-3 gap-x-[10px]">
        {products.map((product, i) => (
          <ProductCard
            key={product.boardId}
            product={{ ...product, storeId: storeInfo.storeId, storeName: storeInfo.storeName }}
            popular
            ranking={Number(i + 1)}
          />
        ))}
      </div>
    </PaddingWrapper>
  );
};

export default StoreBestProductsSection;
