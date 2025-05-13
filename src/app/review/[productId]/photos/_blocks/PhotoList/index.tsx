'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import useFullScreenModal from '@/shared/hooks/useFullScreenModal';
import useGetReviewPhotosQuery from '@/domains/review/queries/useGetReviewPhotosQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import PhotoSlideModal from '@/domains/review/components/alert-box/PhotoSlideModal';
import PhotoSkeleton from './PhotoSkeleton';

interface Props {
  boardId: number;
}

const PhotoList = ({ boardId }: Props) => {
  const {
    data: photos,
    isError,
    fetchNextPage,
    hasNextPage
  } = useGetReviewPhotosQuery({ boardId });
  const { ref, inView } = useInView();
  const { openFullScreenModal } = useFullScreenModal();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isError) {
    return (
      <SadBbangleBox className="absoulte-center">
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!photos || photos.length === 0) {
    return (
      <SadBbangleBox className="absoulte-center">
        <p>리뷰 사진이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="grid grid-cols-3 gap-[10px] pt-0">
      {photos.map((photo, idx) => (
        <Image
          key={photo.id}
          src={photo.url}
          alt="리뷰 이미지"
          width={100}
          height={100}
          blurDataURL={BLUR_DATA_URL}
          onClick={() =>
            openFullScreenModal(<PhotoSlideModal photos={photos} initSlideIdx={idx} />)
          }
          className="w-full aspect-square object-cover border-solid border-[1px] border-gray-300 rounded-[6px] cursor-pointer"
        />
      ))}
      {hasNextPage && <PhotoSkeleton ref={ref} count={3} />}
    </PaddingWrapper>
  );
};

export default PhotoList;
