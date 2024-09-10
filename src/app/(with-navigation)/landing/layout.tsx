import React, { ReactNode } from 'react';

import Header from '@/shared/components/Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header back title="앱 런칭 기념 EVENT!" className="sticky top-0 bg-white z-50" />
    {children}
  </>
);

export default Layout;
