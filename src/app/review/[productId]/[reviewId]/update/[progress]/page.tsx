import { notFound } from 'next/navigation';
import Header from '@/shared/components/Header';
import ReviewUpdateForm from '../_blocks/ReviewUpdateForm';

interface Props {
  params: Promise<{ progress: string }>;
}

const ReviewUpdatePage = async ({ params }: Props) => {
  // Destructuring props here
  const { progress } = await params;
  const progressNum = Number(progress);

  if (progressNum !== 1 && progressNum !== 2) notFound();

  return (
    <>
      <Header
        title="리뷰 수정"
        content={<span className="typo-title-16-medium text-gray-500">{progressNum}/2</span>}
        back
      />
      <ReviewUpdateForm progress={progressNum} />
    </>
  );
};

export default ReviewUpdatePage;
