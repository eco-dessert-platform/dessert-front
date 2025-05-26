'use client';

import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CustomQueryClientProvider from '@/global/CustomQueryClientProvider';

const RootLayoutProvider = ({ children }: { children: ReactNode }) => (
    <CustomQueryClientProvider>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </CustomQueryClientProvider>
);

export default RootLayoutProvider;
