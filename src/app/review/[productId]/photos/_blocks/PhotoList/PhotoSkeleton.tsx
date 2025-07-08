import { forwardRef } from 'react';

interface Props {
  count?: number;
}

const PhotoSkeleton = ({ count = 1 }: Props, ref: React.ForwardedRef<HTMLDivElement>) => (
  <>
    {Array.from(Array(count).keys()).map((num) => (
      <div
        key={num}
        ref={ref}
        className="aspect-square w-full animate-pulse rounded-[6px] bg-gray-300"
      />
    ))}
  </>
);

export default forwardRef(PhotoSkeleton);
