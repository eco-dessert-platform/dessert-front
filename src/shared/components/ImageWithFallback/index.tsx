'use client';

import Image, { ImageProps } from 'next/image';
import { ReactNode, useState } from 'react';

interface Props extends ImageProps {
  fallback: ReactNode;
}

const ImageWithFallback = ({ fallback, ...props }: Props) => {
  const [isError, setIsError] = useState(false);

  return isError ? fallback : <Image onError={() => setIsError(true)} {...props} />;
};

export default ImageWithFallback;
