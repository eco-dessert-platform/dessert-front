import { notFound } from 'next/navigation';
import Header from '@/shared/components/Header';
import ReviewCreateForm from '../_blocks/ReviewCreateForm';

interface ReviewCreatePageProps {
  params: Promise<{ productId: string | null; progress: string | null }>;
}

const ReviewCreatePage = async ({ params }: ReviewCreatePageProps) => {  
  const { productId, progress } = await params;

  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();
  if (!productId) throw new Error('productId is invalid');

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progressNum}/2</span>}
        back
      />
      <ReviewCreateForm progress={progressNum} />
    </>
  );
};

export default ReviewCreatePage;
