'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CustomQueryClientProvider from '@/global/CustomQueryClientProvider';

const RootLayoutProvider = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>
    <CustomQueryClientProvider>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </CustomQueryClientProvider>
  </RecoilRoot>
);

export default RootLayoutProvider;
