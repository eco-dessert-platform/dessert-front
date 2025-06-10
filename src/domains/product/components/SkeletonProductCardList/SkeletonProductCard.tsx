const SkeletonProductCard = () => (
  <div className="w-full animate-pulse">
    <div className="aspect-square w-full rounded-sm bg-gray-300" />
    <div className="mt-2 h-4 w-1/4 rounded-sm bg-gray-300" />
    <div className="mt-1 h-4 rounded-sm bg-gray-300" />
    <div className="mt-1 h-4 rounded-sm bg-gray-300" />
    <div className="mt-1 h-4 w-2/4 rounded-sm bg-gray-300" />
  </div>
);

export default SkeletonProductCard;
