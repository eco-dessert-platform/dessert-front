import WishProductList from '@/blocks/wish/(list)/products/WishProductList';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import WishProductSortSelect from '@/domains/wish/components/WishProductSortSelect';

const WishProductsDetail = () => (
  <>
    <PaddingWrapper className="pb-[12px]">
      <WishProductSortSelect />
    </PaddingWrapper>
    <PaddingWrapper>
      <WishProductList />
    </PaddingWrapper>
  </>
);

export default WishProductsDetail;
