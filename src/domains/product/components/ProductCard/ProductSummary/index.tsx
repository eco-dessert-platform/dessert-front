import TagSwiper from '@/domains/product/components/ProductCard/ProductSummary/TagSwiper';
import { IProductType } from '@/domains/product/types/productType';
import { StarIcon } from '@/shared/components/icons';

interface ProductSummaryProps {
  product: IProductType;
}

const ProductSummary = ({
  product: { storeName, title, discountRate, price, reviewRate, reviewCount, tags }
}: ProductSummaryProps) => (
  <div className="mt-[6px]">
    <p className="text-gray-600 typo-body-11-regular">{storeName}</p>
    <h3 className="text-gray-800 typo-body-12-regular overflow-hidden text-ellipsis whitespace-nowrap">
      {title}
    </h3>
    <div className="flex items-center gap-x-[2px] typo-title-14-medium">
      {discountRate > 0 && <span className="text-secondaryOrangeRed">{discountRate}%</span>}
      <span className="text-gray-900">{price.toLocaleString()}원</span>
    </div>
    {reviewRate !== undefined && reviewCount !== undefined && (
      <div className="mb-[4px] flex gap-[2px] items-center">
        <div className="flex items-center">
          <StarIcon size="sm" color="yellow" />
          <p className="typo-body-11-semibold text-gray-800">{reviewRate.toFixed(1)}</p>
        </div>
        <span className="typo-body-11-regular text-gray-500">({reviewCount.toLocaleString()})</span>
      </div>
    )}
    {tags && <TagSwiper tag={tags} />}
  </div>
);

export default ProductSummary;
