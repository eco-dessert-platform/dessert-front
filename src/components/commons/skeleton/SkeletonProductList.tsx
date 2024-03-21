import { SkeletonProductCard } from './SkeletonProductCard';

interface SkeletonProductListProps {
  row?: number; // 행 개수
  col?: number; // 열 개수
}

export const SkeletonProductList = ({ row = 3, col = 2 }: SkeletonProductListProps) => {
  return (
    <>
      {Array(row)
        .fill(0)
        .map((_, idx) => (
          <div key={`row-${idx}`} className="flex flex-wrap w-[92%] m-auto gap-x-[4%] pb-4">
            {Array(col)
              .fill(0)
              .map((_, idx) => (
                <SkeletonProductCard key={`col-${idx}`} />
              ))}
          </div>
        ))}
    </>
  );
};
