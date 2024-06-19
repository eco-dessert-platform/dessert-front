import TagSwiper from '@/domains/product/components/ProductCard/ProductSummary/TagSwiper';
import { IProductType } from '@/domains/product/types/productType';
import { StarIcon } from '@/shared/components/icons';

interface ProductSummaryProps {
  product: IProductType;
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <div className="mt-[6px]">
    <p className="text-gray-400 typo-body-11-regular">{product?.storeName}</p>
    <h3 className="text-gray-800 typo-body-12-regular overflow-hidden text-ellipsis whitespace-nowrap">
      {product.title}
    </h3>
    <div className="flex items-center gap-x-[2px] typo-title-14-medium">
      <span className="text-secondaryOrangeRed">10%</span>
      <span className="text-gray-900">{product.price.toLocaleString()}원</span>
    </div>
    <div className="mb-[4px] flex gap-[2px] items-center">
      <div className="flex items-center">
        <StarIcon size="sm" color="yellow" />
        <span className="typo-body-11-semibold text-gray-800">4.5</span>
      </div>
      <span className="typo-body-11-regular text-gray-500">(1000)</span>
    </div>
    {product.tags && <TagSwiper tag={product.tags} />}
  </div>
);

export default ProductSummary;
