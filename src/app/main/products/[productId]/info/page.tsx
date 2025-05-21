import TopButton from '@/shared/components/TopButton';
import BoardDetailsSection from './_blocks/BoardDetailsSection';
import BoardImagesSection from './_blocks/BoardImagesSection';
import ProductOptionsSection from './_blocks/ProductOptionsSection';
import ReviewBadgeSection from './_blocks/ReviewBadgeSection';
import SimpleInfoWithStoreSection from './_blocks/SimpleInfoWithStoreSection';

interface Props {
  params: Promise<{ productId: string }>;
}

const ProductDetailPage = async ({ params }: Props) => {  
  const { productId } = await params;

  const id = Number(productId);
  return (
    <>
      <BoardImagesSection productId={id} />
      <SimpleInfoWithStoreSection productId={id} />
      <ReviewBadgeSection productId={id} />
      <ProductOptionsSection productId={id} />
      <BoardDetailsSection productId={id} />
      <TopButton />
    </>
  );
};

export default ProductDetailPage;
