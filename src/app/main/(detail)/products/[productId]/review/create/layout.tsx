import ReviewFormProvider from '@/domains/review/components/ReviewFormProvider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => (
  <ReviewFormProvider>{children}</ReviewFormProvider>
);

export default Layout;
