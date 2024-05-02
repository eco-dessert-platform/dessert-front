'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CustomQueryClientProvider from '@/global/CustomQueryClientProvider';
import RecoilNexus from 'recoil-nexus';

const RootLayoutProvider = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>
    <RecoilNexus />
    <CustomQueryClientProvider>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </CustomQueryClientProvider>
  </RecoilRoot>
);

export default RootLayoutProvider;
