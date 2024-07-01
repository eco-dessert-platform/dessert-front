import { FormEventHandler, MouseEventHandler } from 'react';
import BadgeSelectSection from './BadgeSelectSection';
import CommentSection from './CommentSection';

interface Props {
  progress: 1 | 2;
  onNextClick: MouseEventHandler<HTMLButtonElement>;
  onSumbmit: FormEventHandler<HTMLFormElement>;
}

const ReviewWriteForm = ({ progress, onSumbmit, onNextClick }: Props) => (
  <form onSubmit={onSumbmit}>
    {progress === 1 && <BadgeSelectSection onNextClick={onNextClick} />}
    {progress === 2 && <CommentSection />}
  </form>
);

export default ReviewWriteForm;
