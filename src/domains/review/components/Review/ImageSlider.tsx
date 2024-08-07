import { motion } from 'framer-motion';
import { useRef } from 'react';
import ImageWithFallback from '@/shared/components/ImageWithFallback';
import Skeleton from '@/shared/components/Skeleton';
import { ReviewType } from '../../types/review';

interface Props {
  images: ReviewType['images'];
}

const ImageSlider = ({ images }: Props) => {
  const constraintRef = useRef(null);

  return (
    <motion.div className="w-fit max-w-full" ref={constraintRef}>
      <motion.div drag="x" dragConstraints={constraintRef} className="flex w-max gap-[4px]">
        {images?.map(({ url, id }) => (
          <div
            key={id}
            className="relative size-[64px] aspect-square rounded-[6px] overflow-hidden"
          >
            <ImageWithFallback
              fallback={<Skeleton className="size-full rounded-none" />}
              src={url}
              fill
              alt="review image"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
