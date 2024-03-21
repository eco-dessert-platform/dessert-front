interface PopularRankingProps {
  ranking?: number;
}

export const RankingBadge = ({ ranking }: PopularRankingProps) => {
  return (
    <span className="flex justify-center items-center w-[20px] h-[20px] bg-white rounded-[6px] border border-solid border-gray-100 text-gray-900 text-11 font-bold tracking-tight-2">
      {ranking}
    </span>
  );
};
