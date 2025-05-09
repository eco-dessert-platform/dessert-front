import { PropsWithChildren } from 'react';
import DefaultLayout from '@/shared/components/DefaultLayout';
import ReviewCreateFormProvider from './_blocks/ReviewCreateFormProvider';
import ButtonSection from './_blocks/ButtonSection';

const Layout = ({ children }: PropsWithChildren) => (
  <ReviewCreateFormProvider>
    <DefaultLayout main={children} footer={<ButtonSection />} />
  </ReviewCreateFormProvider>
);

export default Layout;
