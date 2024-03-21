'use client';

import Link from 'next/link';
import Logo from '@/commons/assets/logo.svg';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const LogoContainer = () => {
  return (
    <PaddingWrapper className="pt-[10px] bg-white">
      <h1>
        <Link href="/">
          <Logo />
        </Link>
      </h1>
    </PaddingWrapper>
  );
};

export default LogoContainer;
