import SearchStoreList from '@/blocks/search/SearchStoreList';

interface SearchStoresProps {
  searchParams: { query?: string };
}

const SearchStores = ({ searchParams: { query } }: SearchStoresProps) => (
  <SearchStoreList keyword={query} />
);

export default SearchStores;
