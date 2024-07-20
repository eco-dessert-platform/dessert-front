import { FormEventHandler, MouseEventHandler } from 'react';
import BadgeSelectSection from './BadgeSelectSection';
import CommentSection from './CommentSection';

interface Props {
  progress: 1 | 2;
  onNextClick: MouseEventHandler<HTMLButtonElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const ReviewWriteForm = ({ progress, onSubmit, onNextClick }: Props) => (
  <form onSubmit={onSubmit}>
    {progress === 1 && <BadgeSelectSection onNextClick={onNextClick} />}
    {progress === 2 && <CommentSection />}
  </form>
);

export default ReviewWriteForm;
