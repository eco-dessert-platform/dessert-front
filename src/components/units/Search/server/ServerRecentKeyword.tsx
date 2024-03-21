import RecentKeyword from '../client/RecentKeyword';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const ServerRecentKeyword = () => {
  return (
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <div className="text-gray-500 text-14 font-semibold leading-150 tracking-tight-2">
        최근 검색어
      </div>
      <RecentKeyword />
    </PaddingWrapper>
  );
};

export default ServerRecentKeyword;
