import DetailFixedBtnSection from '@/blocks/product/DetailFixedBtnSection';
import DetailInformationImgs from '@/blocks/product/DetailInformationImgs';
import DetailOrderAvailableDays from '@/blocks/product/DetailOrderAvailableDays';
import DetailProductComposition from '@/blocks/product/DetailProductComposition';
import ProductDetailImgs from '@/blocks/product/DetailProductImgs';
import DetailProductSummary from '@/blocks/product/DetailProductSummary';
import GrayDivider from '@/shared/components/GrayDivider';
import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';
import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';
import getProductDetail from '@/domains/product/queries/getProductDetail';

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const data = await getProductDetail(params);

  return (
    <>
      <Header
        title={`[${data.store.storeName}] ${data.board.title}`}
        content={
          <button type="button" aria-label="공유 버튼">
            <ShareIcon />
          </button>
        }
        back
      />
      <ProductDetailImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
      <DetailStoreInfo store={data.store} />

      <GrayDivider />

      <DetailProductSummary data={data} />

      <GrayDivider />

      <DetailOrderAvailableDays data={data} />
      <DetailProductComposition data={data} />
      <DetailFixedBtnSection data={data} />
      <DetailInformationImgs data={data} />
    </>
  );
};

export default ProductDetail;
