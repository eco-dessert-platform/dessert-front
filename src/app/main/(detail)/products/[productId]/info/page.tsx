import BoardDetailsSection from '@/blocks/main/(detail)/products/[productId]/info/BoardDetailSection';
import BoardImagesSection from '@/blocks/main/(detail)/products/[productId]/info/BoardImagesSection';
import ProductOptionsSetion from '@/blocks/main/(detail)/products/[productId]/info/ProductOptionsSection';
import ReviewBadgeSection from '@/blocks/main/(detail)/products/[productId]/info/ReviewBadgeSection';
import SimpleInfoWithStoreSection from '@/blocks/main/(detail)/products/[productId]/info/SimpleInfoWithStoreSection';

interface Props {
  params: { productId: string };
}

const ProductDetailPage = ({ params }: Props) => (
  <>
    <BoardImagesSection productId={params.productId} />

    <SimpleInfoWithStoreSection productId={params.productId} />

    <ReviewBadgeSection productId={params.productId} />

    <ProductOptionsSetion productId={params.productId} />

    <BoardDetailsSection productId={params.productId} />
  </>
);

export default ProductDetailPage;
