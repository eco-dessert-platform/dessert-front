'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PATH from '@/shared/constants/path';
import { cn } from '@/shared/utils/cn';

interface Props {
  comment: string;
  boardId: number;
  reviewId: number;
}

const Comment = ({ comment, boardId, reviewId }: Props) => {
  const [status, setStatus] = useState<'init' | 'ellipsis' | 'entire'>('init');

  const commentRef = useRef<HTMLParagraphElement>(null);
  const originalCommentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleMoreButton = () => {
      if (!originalCommentRef.current || !commentRef.current) return;
      const { clientHeight: originalHeight } = originalCommentRef.current;
      const { clientHeight: commentHeight } = commentRef.current;
      const newStatus = originalHeight === commentHeight ? 'entire' : 'ellipsis';
      setStatus(newStatus);
    };

    handleMoreButton();
    window.addEventListener('resize', handleMoreButton);
    return () => window.addEventListener('resize', handleMoreButton);
  }, []);

  const showEntire = () => {
    setStatus('entire');
  };

  return (
    <>
      <div
        className={cn(
          'typo-title-14-regular',
          (status === 'init' || status === 'ellipsis') && 'line-clamp-3'
        )}
      >
        {status === 'ellipsis' && (
          <button
            type="button"
            onClick={showEntire}
            className="float-right mt-[42px] [shape-outside:border-box] text-gray-500"
          >
            더보기
          </button>
        )}

        <Link href={PATH.reviewDetail({ productId: boardId, reviewId })}>
          <p ref={commentRef}>{comment}</p>
        </Link>
      </div>

      <div className="overflow-hidden h-0 typo-title-14-regular">
        <p ref={originalCommentRef}>{comment}</p>
      </div>
    </>
  );
};

export default Comment;
