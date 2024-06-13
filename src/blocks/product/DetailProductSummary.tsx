import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ProductTag from '@/domains/product/components/ProductTag';
import { IProductDetailType } from '@/domains/product/types/productDetailType';

interface DetailProductSummaryProps {
  data: IProductDetailType;
}
const DetailProductSummary = ({ data }: DetailProductSummaryProps) => {
  const { products } = data.board;
  const uniqueTags = Array.from(new Set(products.map((product) => product.tags).flat()));
  return (
    <PaddingWrapper>
      <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex">
        {uniqueTags.map((tag) => (
          <ProductTag key={tag} tag={tag} />
        ))}
      </div>
      <div className="text-16 leading-130 font-normal text-gray-800 mb-[2px]">
        {data.board.title}
      </div>
      <div className="text-16 font-bold leading-120">
        <span className="text-20">{data.board.price.toLocaleString()}</span>원
      </div>
    </PaddingWrapper>
  );
};

export default DetailProductSummary;
