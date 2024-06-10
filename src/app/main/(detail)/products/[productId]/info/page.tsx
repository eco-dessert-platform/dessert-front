// interface ProductDetailProps {
//   params: { productId: string };
// }

import BoardDetailsSection from '@/blocks/main/(detail)/products/[productId]/info/BoardDetailSection';
import BoardImagesSection from '@/blocks/main/(detail)/products/[productId]/info/BoardImagesSection';
import ProductOptionsSetion from '@/blocks/main/(detail)/products/[productId]/info/ProductOptionsSection';
import ReviewBadgeSection from '@/blocks/main/(detail)/products/[productId]/info/ReviewBadgeSection';
import SimpleInfoWithStoreSection from '@/blocks/main/(detail)/products/[productId]/info/SimpleInfoWithStoreSection';
import getBoardDetail from '@/domains/product/queries/getBoardDetail';
import getProductDetail from '@/domains/product/queries/getProductDetail';

const ProductDetailPage = async () => {
  const [boardData, productData] = await Promise.all([getBoardDetail(), getProductDetail()]);

  return (
    <>
      {/* 클라이언트 컴포넌트 */}
      <BoardImagesSection
        isBundled={productData.boardIsBundled}
        boardImages={boardData.boardImages}
      />
      {/* 서버 컴포넌트 */}
      <SimpleInfoWithStoreSection />
      {/* 서버 컴포넌트 */}
      <ReviewBadgeSection />
      {/* 클라이언트 컴포넌트 */}
      <ProductOptionsSetion productData={productData} />
      {/* 서버 컴포넌트 */}
      <BoardDetailsSection />
    </>
  );
};

export default ProductDetailPage;
