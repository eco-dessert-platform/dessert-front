import { notFound } from 'next/navigation';
import RecommendationUpdateForm from '../_blocks/RecommendationUpdateForm';

interface Props {
  params: Promise<{ progress: string }>;
}

const RecommendationUpdatePage = async ({ params }: Props) => {  
  const { progress } = await params;

  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();

  return <RecommendationUpdateForm progress={progressNum} />;
};

export default RecommendationUpdatePage;
