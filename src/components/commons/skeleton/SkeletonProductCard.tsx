export const SkeletonProductCard = () => {
  return (
    <div className="w-[48%] animate-pulse">
      <div className="h-48 bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};
