import { ResultResponse } from '@/shared/types/response';
import { IProductListType, IProductType } from '@/domains/product/types/productType';
import ProductCard from '@/domains/product/components/ProductCard';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';
import { productQueryKey } from '@/shared/queries/queryKey';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import FilterSection from '@/domains/product/components/FilterSection';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';

const getBestProducts = async () => {
  const res = await fetchExtend.get('/boards', {
    next: {
      tags: productQueryKey.list('home')
    }
  });
  const { result, success, message, code }: ResultResponse<IProductListType> = await res.json();

  if (!success) {
    throwApiError({ code, message });
  }

  return result;
};

const ProductsList = async () => {
  const bestProducts = await getBestProducts();

  return (
    <>
      {/* <FilterSection filterFamilyId={FILTER_FAMILY_ID.main} /> */}
      <PaddingWrapper>
        <div className="grid grid-cols-3 gap-x-[10px]">
          {bestProducts?.content
            .slice(0, 3)
            .map((product: IProductType, index: number) => (
              <ProductCard
                key={String(product.boardId)}
                product={product}
                popular
                ranking={index + 1}
              />
            ))}
        </div>
        <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] py-4">
          {bestProducts?.content.map((product: IProductType) => (
            <ProductCard key={String(product.boardId)} product={product} />
          ))}
        </div>
      </PaddingWrapper>
    </>
  );
};

export default ProductsList;
