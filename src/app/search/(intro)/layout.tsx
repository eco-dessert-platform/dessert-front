import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface SearchIntroLayoutProps {
  recentKeyword: React.ReactNode;
  popularKeyword: React.ReactNode;
}

const SearchIntroLayout = ({ recentKeyword, popularKeyword }: SearchIntroLayoutProps) => (
  <>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <div className="text-gray-500 text-14 font-semibold leading-150 tracking-tight-2">
        최근 검색어
      </div>
      {recentKeyword}
    </PaddingWrapper>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <div className="text-gray-500 text-14 font-semibold leading-150 tracking-tight-2">
        인기 검색어
      </div>
      {popularKeyword}
    </PaddingWrapper>
  </>
);

export default SearchIntroLayout;
