import type { Viewport } from 'next';
import { Suspense } from 'react';
import { getStaticMetadata } from '@/shared/utils/metadata';
import SearchInputSection from '@/blocks/search/SearchInputSection';

export const metadata = getStaticMetadata('search');

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1
};

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => (
  <>
    <Suspense>
      <SearchInputSection />
    </Suspense>
    {children}
  </>
);

export default SearchLayout;
