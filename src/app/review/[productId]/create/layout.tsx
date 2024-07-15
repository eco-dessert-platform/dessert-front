import { PropsWithChildren } from 'react';
import ReviewCreatFormProvider from './[progress]/_blocks/ReviewCreatFormProvider';

const Layout = ({ children }: PropsWithChildren) => (
  <ReviewCreatFormProvider>{children}</ReviewCreatFormProvider>
);

export default Layout;
