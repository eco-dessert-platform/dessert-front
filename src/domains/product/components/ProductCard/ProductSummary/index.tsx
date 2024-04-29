import TagSwiper from '@/domains/product/components/ProductCard/ProductSummary/TagSwiper';
import { IProductType } from '@/domains/product/types/productType';

interface ProductSummaryProps {
  product: IProductType;
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <div className="mt-[6px]">
    <p className="mb-[2px] text-12 font-medium text-gray-400 leading-130 tracking-tight-2">
      {product?.storeName}
    </p>
    <h3 className="mb-[2px] overflow-hidden text-12 font-normal text-ellipsis whitespace-nowrap leading-130 tracking-tight-2">
      {product.title}
    </h3>
    <p className="mb-[4px] text-14 font-medium text-gray-900 leading-120 tracking-tight-4">
      {product.price}원
    </p>
    {product.tags && <TagSwiper tag={product.tags} />}
  </div>
);

export default ProductSummary;
