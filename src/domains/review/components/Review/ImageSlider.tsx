import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  const constraintRef = useRef(null);

  return (
    <motion.div className="w-fit max-w-full" ref={constraintRef}>
      <motion.div drag="x" dragConstraints={constraintRef} className="flex w-max gap-[4px]">
        {images?.map((image, index) => (
          <div
            key={image + String(index)}
            className="relative size-[64px] aspect-square rounded-[6px] overflow-hidden"
          >
            <Image
              src={image}
              fill
              alt="review image"
              className="object-cover"
              sizes="64px"
              priority
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
