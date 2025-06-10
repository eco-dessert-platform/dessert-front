import SortingFilterSection from '@/blocks/main/(list)/SortingFilterSection';
import SearchProductList from '@/blocks/search/products/SearchProductList';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import TopButton from '@/shared/components/TopButton';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = async ({ searchParams }: SearchProductsProps) => {
  const params = await searchParams;
  const keyword = params.query ?? '';

  return (
    <>
      <SortingFilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
      <SearchProductList keyword={keyword} />
      <TopButton />
    </>
  );
};

export default SearchProducts;
