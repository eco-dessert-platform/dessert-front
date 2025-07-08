const SkeletonStoreCard = () => (
  <div className="flex w-full animate-pulse gap-[10px] border-b border-gray-100 py-[16px]">
    <div className="aspect-square h-[40px] w-[40px] rounded-full bg-gray-300" />
    <div className="w-full">
      <div className="h-4 w-2/4 rounded-sm bg-gray-300" />
      <div className="mt-1 h-4 w-2/4 rounded-sm bg-gray-300" />
    </div>
  </div>
);

export default SkeletonStoreCard;
