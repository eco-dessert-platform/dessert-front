'use client';

import Link from 'next/link';
import Image from 'next/image';
import PATH from '@/shared/constants/path';
import useFullScreenModal from '@/shared/hooks/useFullScreenModal';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import PhotoSlideModal from '@/domains/review/components/alert-box/PhotoSlideModal';
import { ReviewPhoto } from '@/domains/review/types/review';

interface Props {
  photos: Array<ReviewPhoto>;
  productId: number;
}

const PhotoSection = ({ photos, productId }: Props) => {
  const { openFullScreenModal } = useFullScreenModal();
  const fourthImage = photos[3];

  return (
    <div className="grid grid-cols-4 gap-[4px]">
      {photos.slice(0, 3).map(({ id, url }, idx) => (
        <Image
          key={id}
          src={url}
          alt="best review image"
          width={80}
          height={80}
          blurDataURL={BLUR_DATA_URL}
          onClick={() =>
            openFullScreenModal(<PhotoSlideModal photos={photos.slice(0, 4)} initSlideIdx={idx} />)
          }
          className="aspect-square w-full cursor-pointer rounded-[6px] border border-solid border-gray-300 object-cover"
        />
      ))}
      {fourthImage && (
        <Link
          key={fourthImage.id}
          href={PATH.reviewPhotos(productId)}
          className="after:flex-center relative after:absolute after:inset-0 after:size-full after:rounded-[6px] after:bg-black/50 after:text-white after:content-['+더보기']"
        >
          <Image
            src={fourthImage.url}
            alt="best review image"
            width={80}
            height={80}
            blurDataURL={BLUR_DATA_URL}
            className="aspect-square w-full rounded-[6px] border border-solid border-gray-300 object-cover"
          />
        </Link>
      )}
    </div>
  );
};

export default PhotoSection;
