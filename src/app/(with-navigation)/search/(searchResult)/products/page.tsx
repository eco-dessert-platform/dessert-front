'use client';

import SortingFilterSection from '@/blocks/main/(list)/SortingFilterSection';
import SearchProductList from '@/blocks/search/products/SearchProductList';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import TopButton from '@/shared/components/TopButton';
import { useSearchParams } from 'next/navigation';

const SearchProducts = () => {
  const params = useSearchParams();
  const keyword = params.get('query') ?? '';

  return (
    <>
      <SortingFilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
      <SearchProductList keyword={keyword} />
      <TopButton />
    </>
  );
};

export default SearchProducts;
