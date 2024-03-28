export const SkeletonProductCard = () => {
  return (
    <div className="w-[48%] animate-pulse">
      <div className="w-full aspect-square bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="mt-1 h-4 bg-gray-300 rounded"></div>
      <div className="mt-1 h-4 bg-gray-300 rounded"></div>
      <div className="mt-1 h-4 bg-gray-300 rounded  w-2/4"></div>
    </div>
  );
};
