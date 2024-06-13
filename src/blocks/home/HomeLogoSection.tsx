'use client';

import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BbangleIcon } from '@/shared/components/icons';

const HomeLogoSection = () => (
  <PaddingWrapper className="bg-white">
    <h1>
      <Link href="/">
        <BbangleIcon shape="horizontal-name" />
      </Link>
    </h1>
  </PaddingWrapper>
);

export default HomeLogoSection;
