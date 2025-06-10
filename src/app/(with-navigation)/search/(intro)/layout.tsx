import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface SearchIntroLayoutProps {
  recentKeyword: React.ReactNode;
  popularKeyword: React.ReactNode;
}

const SearchIntroLayout = ({ recentKeyword, popularKeyword }: SearchIntroLayoutProps) => (
  <>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <h3 className="typo-title-14-semibold text-gray-500">최근 검색어</h3>
      {recentKeyword}
    </PaddingWrapper>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <h3 className="typo-title-14-semibold text-gray-500">인기 검색어</h3>
      {popularKeyword}
    </PaddingWrapper>
  </>
);

export default SearchIntroLayout;
