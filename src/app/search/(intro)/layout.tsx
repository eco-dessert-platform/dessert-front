import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface SearchIntroLayoutProps {
  recentKeyword: React.ReactNode;
  popularKeyword: React.ReactNode;
}

const SearchIntroLayout = ({ recentKeyword, popularKeyword }: SearchIntroLayoutProps) => (
  <>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <h3 className="text-gray-500 typo-title-14-semibold">최근 검색어</h3>
      {recentKeyword}
    </PaddingWrapper>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <h3 className="text-gray-500 typo-title-14-semibold">인기 검색어</h3>
      {popularKeyword}
    </PaddingWrapper>
  </>
);

export default SearchIntroLayout;
