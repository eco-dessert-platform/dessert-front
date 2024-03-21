import { IProductType } from '@/commons/types/productType';
import TagSwiper from '@/components/units/Home/client/TagSwiper';

interface ProductSummaryProps {
  product: IProductType;
}

export const ProductSummary = ({ product }: ProductSummaryProps) => {
  return (
    <div className="mt-[6px]">
      <p className="mb-[2px] text-12 font-medium text-gray-400 leading-130 tracking-tight-2">
        {product?.storeName}
      </p>
      <h3 className="mb-[2px] overflow-hidden text-12 font-normal overflow-ellipsis whitespace-nowrap leading-130 tracking-tight-2">
        {product.title}
      </h3>
      <p className="mb-[4px] text-14 font-medium text-gray-900 leading-120 tracking-tight-4">
        {product.price.toLocaleString()}원
      </p>
      {product.tags && <TagSwiper tag={product.tags} />}
    </div>
  );
};
