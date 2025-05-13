'use client';

import Header from '@/shared/components/Header';

const MainListLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="카테고리" back />
    {children}
  </>
);

export default MainListLayout;
