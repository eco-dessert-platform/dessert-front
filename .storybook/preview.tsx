import type { Preview } from '@storybook/react';
import '@/global/global.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ModalContainer from '../src/global/ModalContainer';
import ToastContainer from '../src/global/ToastContainer';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
        <ModalContainer />
        <ToastContainer />
      </RecoilRoot>
    )
  ]
};

export default preview;
