import { ResultResponse } from '@/shared/types/response';
import { IProductListType, IProductType } from '@/domains/product/types/productType';
import ProductCard from '@/domains/product/components/ProductCard';
import { REAVALIDATE_TAG } from '@/shared/constants/revalidateTags';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';

const getBestProducts = async () => {
  const res = await fetchExtend.get('/boards', {
    next: {
      tags: [REAVALIDATE_TAG.product]
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
    <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px]">
      {bestProducts?.content.map((product: IProductType) => (
        <ProductCard key={String(product.boardId)} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
