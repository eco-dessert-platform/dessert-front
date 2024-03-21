import PopularKeyword from '../client/PopularKeyword';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

function ServerPopularKeyword() {
  return (
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <div className="text-gray-500 text-14 font-semibold leading-150 tracking-tight-2">
        인기 검색어
      </div>
      <PopularKeyword />
    </PaddingWrapper>
  );
}

export default ServerPopularKeyword;
