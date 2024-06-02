import DetailContentItems from '@/blocks/product/DetailContentItems';
import ProductDetailImgs from '@/blocks/product/DetailProductImgs';
import getBoardDetail from '@/domains/product/queries/getBoardDetail';
import getStoreInfo from '@/domains/product/queries/getStoreInfo';
import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';

// interface ProductDetailProps {
//   params: { productId: string };
// }

const ProductDetail = async () => {
  const boardData = await getBoardDetail();
  const storeData = await getStoreInfo();

  return (
    <>
      <ProductDetailImgs boardImages={boardData.boardImages} isBundled />
      <DetailStoreInfo store={storeData} />
      {/* <BreifExplanation boardData={products} /> */}
      <DetailContentItems boardData={boardData} />
    </>
  );
};

export default ProductDetail;
