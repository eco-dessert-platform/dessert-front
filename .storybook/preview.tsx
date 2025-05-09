import '@/global/global.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import type { Preview } from '@storybook/react';
import AlertContainer from '../src/global/AlertContainer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    nextjs: {
      appDirectory: true
    }
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Story />
          <AlertContainer />
        </QueryClientProvider>
      </RecoilRoot>
    )
  ]
};

export default preview;
