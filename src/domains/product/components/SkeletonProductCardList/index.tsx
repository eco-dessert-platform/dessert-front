import SkeletonProductCard from './SkeletonProductCard';

interface SkeletonProductCardListProps {
  row?: number; // 행 개수
  col?: number; // 열 개수
}
type GridType = {
  [key: string]: string;
};

const GRID_ROWS: GridType = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3'
};

const GRID_COLS: GridType = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3'
};

const SkeletonProductCardList = ({ row = 3, col = 2 }: SkeletonProductCardListProps) => (
  <div className={`grid ${GRID_ROWS[row]} ${GRID_COLS[col]} gap-x-[16px] gap-y-[16px]`}>
    {Array.from(Array(row * col).keys()).map((item) => (
      <SkeletonProductCard key={item} />
    ))}
  </div>
);
export default SkeletonProductCardList;
