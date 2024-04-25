import {
  AppRouterContext,
  AppRouterInstance
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { vi } from 'vitest';
import React, { useMemo } from 'react';

export type AppRouterContextProviderMockProps = {
  router: Partial<AppRouterInstance>;

  children: React.ReactNode;
};

export const AppRouterContextProviderMock = ({
  children,
  router
}: AppRouterContextProviderMockProps) => {
  const mockedRouter: AppRouterInstance = useMemo(
    () => ({
      back: vi.fn(),
      forward: vi.fn(),
      push: vi.fn(),
      replace: vi.fn(),
      refresh: vi.fn(),
      prefetch: vi.fn(),
      ...router
    }),
    [router]
  );
  return <AppRouterContext.Provider value={mockedRouter}>{children}</AppRouterContext.Provider>;
};
