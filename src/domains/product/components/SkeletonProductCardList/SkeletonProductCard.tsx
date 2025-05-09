const SkeletonProductCard = () => (
  <div className="w-full animate-pulse">
    <div className="w-full aspect-square bg-gray-300 rounded" />
    <div className="mt-2 h-4 bg-gray-300 rounded w-1/4" />
    <div className="mt-1 h-4 bg-gray-300 rounded" />
    <div className="mt-1 h-4 bg-gray-300 rounded" />
    <div className="mt-1 h-4 bg-gray-300 rounded  w-2/4" />
  </div>
);

export default SkeletonProductCard;
