'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SECOND } from '@/shared/constants/time';

let browserQueryClient: QueryClient | undefined;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * SECOND
      }
    }
  });
}

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  }
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

const CustomQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
