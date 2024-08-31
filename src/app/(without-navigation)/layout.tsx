import DefaultLayout from '@/shared/components/DefaultLayout';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => <DefaultLayout main={children} />;

export default Layout;
