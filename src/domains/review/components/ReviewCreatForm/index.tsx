import { DefaultValues } from 'react-hook-form';
import BadgeSelectSection from './BadgeSelectSection';
import CommentSection from './CommentSection';
import ReviewFormProvider from './ReviewFormProvider';
import { IReviewCreateForm } from '../../types/review';

interface Props {
  progress: 1 | 2;
  defaultValues?: DefaultValues<IReviewCreateForm>;
}

const ReviewCreateForm = ({ progress, defaultValues }: Props) => (
  <ReviewFormProvider defaultValues={defaultValues}>
    <form>
      {progress === 1 && <BadgeSelectSection />}
      {progress === 2 && <CommentSection />}
    </form>
  </ReviewFormProvider>
);

export default ReviewCreateForm;
