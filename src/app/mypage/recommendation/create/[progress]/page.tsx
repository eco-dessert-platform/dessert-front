import { notFound } from 'next/navigation';
import RecommendationCreateForm from '../_blocks/RecommendationCreateForm';

interface Props {
  params: Promise<{ progress: string }>;
}

const RecommendationCreatePage = async ({ params }: Props) => {  
  const { progress } = await params;

  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();

  return <RecommendationCreateForm progress={progressNum} />;
};

export default RecommendationCreatePage;
