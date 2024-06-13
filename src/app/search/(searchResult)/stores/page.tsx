import SearchStoreList from '@/blocks/search/stores/SearchStoreList';

interface SearchStoresProps {
  searchParams: { query?: string };
}

const SearchStores = ({ searchParams: { query } }: SearchStoresProps) => (
  <SearchStoreList keyword={query} />
);

export default SearchStores;
