'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SECOND } from '@/shared/constants/time';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';

const CustomQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { openToast } = useToast();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * SECOND
      }
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.error(error);

        const message = query.meta?.errorMessage;
        if (!message) return;

        openToast(
          <ToastPop>
            <div>{message}</div>
          </ToastPop>
        );
      }
    })
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
