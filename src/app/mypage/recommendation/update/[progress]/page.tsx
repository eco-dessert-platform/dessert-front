import { notFound } from 'next/navigation';
import RecommendationUpdateForm from '../_blocks/RecommendationUpdateForm';

interface Props {
  params: { progress: string };
}

const RecommendationUpdatePage = ({ params: { progress } }: Props) => {
  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();

  return <RecommendationUpdateForm progress={progressNum} />;
};

export default RecommendationUpdatePage;
