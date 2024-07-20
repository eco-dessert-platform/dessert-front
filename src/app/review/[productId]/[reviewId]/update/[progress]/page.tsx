import { notFound } from 'next/navigation';
import Header from '@/shared/components/Header';
import ReviewUpdateForm from '../_blocks/ReviewUpdateForm';

interface Props {
  params: { progress: string };
}

const ReviewUpdatePage = async ({ params }: Props) => {
  const progress = Number(params.progress);

  if (progress !== 1 && progress !== 2) notFound();

  return (
    <>
      <Header
        title="리뷰 수성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />

      <ReviewUpdateForm progress={progress} />
    </>
  );
};

export default ReviewUpdatePage;
