import { PropsWithChildren } from 'react';
import ReviewCreateFormProvider from './[progress]/_blocks/ReviewCreateFormProvider';

const Layout = ({ children }: PropsWithChildren) => (
  <ReviewCreateFormProvider>{children}</ReviewCreateFormProvider>
);

export default Layout;
