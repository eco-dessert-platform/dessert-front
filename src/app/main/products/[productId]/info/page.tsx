import TopButton from '@/shared/components/TopButton';
import BoardDetailsSection from './_blocks/BoardDetailSection';
import BoardImagesSection from './_blocks/BoardImagesSection';
import ProductOptionsSetion from './_blocks/ProductOptionsSection';
import ReviewBadgeSection from './_blocks/ReviewBadgeSection';
import SimpleInfoWithStoreSection from './_blocks/SimpleInfoWithStoreSection';

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
