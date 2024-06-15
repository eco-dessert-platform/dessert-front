import TagSwiper from '@/domains/product/components/ProductCard/ProductSummary/TagSwiper';
import { IProductType } from '@/domains/product/types/productType';

interface ProductSummaryProps {
  product: IProductType;
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <div className="mt-[6px]">
    <p className="mb-[2px] text-gray-400 typo-body-12-medium">{product?.storeName}</p>
    <h3 className="mb-[2px] overflow-hidden typo-body-12-regular text-ellipsis whitespace-nowrap ">
      {product.title}
    </h3>
    <p className="mb-[4px] typo-title-14-medium text-gray-900 leading-120 tracking-tight-4">
      {product.price.toLocaleString()}원
    </p>
    {product.tags && <TagSwiper tag={product.tags} />}
  </div>
);

export default ProductSummary;
