import TagSwiper from '@/domains/product/components/ProductCard/ProductSummary/TagSwiper';
import { IProductType } from '@/domains/product/types/productType';
import { StarIcon } from '@/shared/components/icons';

interface ProductSummaryProps {
  product: IProductType;
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <div className="mt-[6px]">
    <p className="mb-[2px] text-gray-400 typo-body-11-regular">{product?.storeName}</p>
    <h3 className="mb-[2px] text-gray-800 overflow-hidden typo-body-12-regular text-ellipsis whitespace-nowrap ">
      {product.title}
    </h3>
    <p className="typo-title-14-medium text-gray-900 leading-120 tracking-tight-4">
      <span className="type-title-14-medium text-secondaryOrangeRed">10% </span>
      {product.price}원
    </p>
    <p className="mb-[4px] flex gap-[2px] items-center typo-title-14-medium text-gray-900 leading-120 tracking-tight-4">
      <StarIcon size="sm" color="yellow" />
      <span className="typo-body-11-semibold text-gray-800">4.5</span>
      <span className="typo-body-11-regular text-gray-500">(1000)</span>
    </p>
    {product.tags && <TagSwiper tag={product.tags} />}
  </div>
);

export default ProductSummary;
