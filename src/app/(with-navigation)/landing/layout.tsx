import React, { ReactNode } from 'react';

import Header from '@/shared/components/Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header back share className="sticky top-0 bg-white z-50" />
    {children}
  </>
);

export default Layout;
