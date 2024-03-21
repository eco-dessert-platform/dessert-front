import FilterTab from '@/components/units/(main)/Products/client/FilterTab';
import ProductList from '@/components/units/Search/client/ProductList';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = ({ searchParams: { query } }: SearchProductsProps) => {
  return (
    <>
      <FilterTab />
      <ProductList keyword={query || ''} />
    </>
  );
};

export default SearchProducts;
