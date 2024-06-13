import Link from 'next/link';
import SearchInput from '@/domains/search/components/SearchInput';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const SearchSection = () => (
  <PaddingWrapper className="py-[10px] bg-white sticky top-0 z-[4999]">
    <Link href="/search">
      <SearchInput readOnly placeholder="궁금한 상품을 찾아보세요!" />
    </Link>
  </PaddingWrapper>
);

export default SearchSection;
