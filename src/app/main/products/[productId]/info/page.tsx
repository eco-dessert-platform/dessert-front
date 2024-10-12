import BoardDetailsSection from '@/blocks/main/(detail)/products/[productId]/info/BoardDetailSection';
import BoardImagesSection from '@/blocks/main/(detail)/products/[productId]/info/BoardImagesSection';
import ProductOptionsSetion from '@/blocks/main/(detail)/products/[productId]/info/ProductOptionsSection';
import ReviewBadgeSection from '@/blocks/main/(detail)/products/[productId]/info/ReviewBadgeSection';
import SimpleInfoWithStoreSection from '@/blocks/main/(detail)/products/[productId]/info/SimpleInfoWithStoreSection';
import TopButton from '@/shared/components/TopButton';

interface Props {
  params: { productId: string };
}

const ProductDetailPage = ({ params: { productId } }: Props) => {
  const id = Number(productId);
  return (
    <>
      <BoardImagesSection productId={id} />
      <SimpleInfoWithStoreSection productId={id} />
      <ReviewBadgeSection productId={id} />
      <ProductOptionsSetion productId={id} />
      <BoardDetailsSection productId={id} />
      <TopButton />
    </>
  );
};

export default ProductDetailPage;
