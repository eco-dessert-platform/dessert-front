import WishProductList from '@/blocks/wish/(list)/products/[folderId]/WishProductList';
import WishProductSortSelect from '@/domains/wish/components/WishProductSortSelect';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

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
