'use client';

import { HydrationBoundary, DehydratedState } from '@tanstack/react-query';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import WishFolderGrid from '@/blocks/wish/(list)/products/WishFolderGrid';
import WishFolderEditButtonSection from '@/blocks/wish/(list)/products/WishFolderEditButtonSection';


interface Props {
  dehydratedState: DehydratedState;
}

const WishProductsClient = ({ dehydratedState }: Props) => (
  <PaddingWrapper>
    <HydrationBoundary state={dehydratedState}>
      <WishFolderEditButtonSection />
      <WishFolderGrid />
    </HydrationBoundary>
  </PaddingWrapper>
);

export default WishProductsClient;
