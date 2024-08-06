import PATH from '@/shared/constants/path';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Props {
  id: number;
  comment: string;
}

const Comment = ({ id, comment }: Props) => {
  const [isEllipsed, setIsEllipsed] = useState(false);

  const commentRef = useRef<HTMLParagraphElement>(null);
  const originalCommentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleMoreButton = () => {
      if (!originalCommentRef.current || !commentRef.current) return;
      const { clientHeight: originalHeight } = originalCommentRef.current;
      const { clientHeight: commentHeight } = commentRef.current;
      setIsEllipsed(originalHeight !== commentHeight);
    };

    handleMoreButton();
    window.addEventListener('resize', handleMoreButton);
    return () => window.addEventListener('resize', handleMoreButton);
  }, []);

  return (
    <>
      <div className="typo-title-14-regular line-clamp-3">
        {isEllipsed && (
          <Link
            href={`${PATH.myReview}/${id}`}
            className="float-right mt-[42px] [shape-outside:border-box] text-gray-500"
          >
            더보기
          </Link>
        )}

        <p ref={commentRef}>{comment}</p>
      </div>

      <div className="overflow-hidden h-0 typo-title-14-regular">
        <p ref={originalCommentRef}>{comment}</p>
      </div>
    </>
  );
};

export default Comment;
