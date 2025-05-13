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
        className="w-full aspect-square rounded-[6px] bg-gray-300 animate-pulse"
      />
    ))}
  </>
);

export default forwardRef(PhotoSkeleton);
