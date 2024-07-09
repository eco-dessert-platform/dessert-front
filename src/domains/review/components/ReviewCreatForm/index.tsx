import { FormEventHandler } from 'react';
import BadgeSelectSection from './BadgeSelectSection';
import CommentSection from './CommentSection';

interface Props {
  progress: 1 | 2;
  onSumbmit: FormEventHandler<HTMLFormElement>;
}

const ReviewCreateForm = ({ progress, onSumbmit }: Props) => (
  <form onSubmit={onSumbmit}>
    {progress === 1 && <BadgeSelectSection />}
    {progress === 2 && <CommentSection />}
  </form>
);

export default ReviewCreateForm;
