import Header from '@/shared/components/Header';
import ReviewCreateForm from '@/domains/review/components/ReviewCreatForm';
import { notFound } from 'next/navigation';

interface ReviewCreatePageProps {
  params: { productId: string; progress: string };
}

const ReviewCreatePage = ({ params }: ReviewCreatePageProps) => {
  const progress = Number(params.progress);

  if (!(progress === 1 || progress === 2)) notFound();

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <ReviewCreateForm progress={progress} />
    </>
  );
};

export default ReviewCreatePage;
