const SkeletonStoreCard = () => (
  <div className="w-full py-[16px] flex gap-[10px] animate-pulse  border-b border-gray-100">
    <div className="w-[40px] h-[40px] aspect-square bg-gray-300 rounded-full" />
    <div className="w-full ">
      <div className=" h-4 bg-gray-300 rounded w-2/4" />
      <div className="mt-1 h-4 bg-gray-300 rounded w-2/4" />
    </div>
  </div>
);

export default SkeletonStoreCard;
