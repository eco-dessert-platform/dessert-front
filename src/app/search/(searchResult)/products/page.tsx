import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import FilterSection from '@/domains/product/components/FilterSection';
import SearchProductList from '@/blocks/search/products/SearchProductList';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = ({ searchParams: { query } }: SearchProductsProps) => (
  <>
    <FilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
    <SearchProductList keyword={query} />
  </>
);

export default SearchProducts;
