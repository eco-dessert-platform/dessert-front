import React, { ReactNode } from 'react';

import Header from '@/shared/components/Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header back share className="sticky top-0 z-50 bg-white" />
    {children}
  </>
);

export default Layout;
