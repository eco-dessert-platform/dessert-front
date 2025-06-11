'use client';

import { IStoreType } from '@/domains/store/types/store';
import { useGetStoreBestProductsQuery } from '@/domains/store/queries/useGetStoreBestProductsQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductCard from '@/domains/product/components/ProductCard';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

interface Props {
  storeInfo: IStoreType;
}

const StoreBestProductsSection = ({ storeInfo: { storeId, storeName } }: Props) => {
  const { data: products } = useGetStoreBestProductsQuery({ storeId });

  if (!products || products.length === 0) {
    return (
      <SadBbangleBox>
        <p>인기 상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper>
      <h5 className="typo-title-14-semibold mb-[10px] text-gray-800">인기상품</h5>
      <div className="grid grid-cols-3 gap-x-[10px]">
        {products.map((product, i) => {
          const { reviewRate, reviewCount, tags, ...rest } = product;
          return (
            <ProductCard
              key={product.boardId}
              product={{ ...rest, storeId, storeName }}
              popular
              ranking={Number(i + 1)}
            />
          );
        })}
      </div>
    </PaddingWrapper>
  );
};

export default StoreBestProductsSection;
