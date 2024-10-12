import { notFound } from 'next/navigation';
import RecommendationCreateForm from '../_blocks/RecommendationCreateForm';

interface Props {
  params: { progress: string };
}

const RecommendationCreatePage = ({ params: { progress } }: Props) => {
  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();

  return <RecommendationCreateForm progress={progressNum} />;
};

export default RecommendationCreatePage;
