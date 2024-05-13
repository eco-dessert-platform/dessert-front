import '@/global/global.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import type { Preview } from '@storybook/react';
import AlertContainer from '../src/global/AlertContainer';

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
        <Story />
        <AlertContainer />
      </RecoilRoot>
    )
  ]
};

export default preview;
