import Footer from '@/global/Footer';
import DefaultLayout from '@/shared/components/DefaultLayout';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => (
  <DefaultLayout main={children} footer={<Footer />} />
);

export default Layout;
