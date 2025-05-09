import { FormEventHandler } from 'react';
import BadgeSelectSection from './BadgeSelectSection';
import CommentSection from './CommentSection';

interface Props {
  id?: string;
  progress: 1 | 2;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const ReviewWriteForm = ({ id, progress, onSubmit }: Props) => (
  <form id={id} onSubmit={onSubmit}>
    {progress === 1 && <BadgeSelectSection />}
    {progress === 2 && <CommentSection />}
  </form>
);

export default ReviewWriteForm;
