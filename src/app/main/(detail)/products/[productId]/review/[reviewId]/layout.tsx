import { PropsWithChildren, Suspense } from 'react';

const Layout = ({ children }: PropsWithChildren) => <Suspense>{children}</Suspense>;

export default Layout;
