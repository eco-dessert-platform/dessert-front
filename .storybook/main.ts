import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: './next.config.js',
      appDirectory: true
    }
  },

  stories: [
    '../src/**/*.mdx',
    {
      directory: '../src/shared/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'COMMON'
    },
    {
      directory: '../src/domains/user/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'USER'
    },
    {
      directory: '../src/domains/product/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'product'
    },
    {
      directory: '../src/domains/store/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'store'
    },
    {
      directory: '../src/domains/review/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'review'
    },
    {
      directory: '../src/domains/wish/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'wish'
    },
    {
      directory: '../src/domains/search/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'search'
    }
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],

  docs: {},

  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
