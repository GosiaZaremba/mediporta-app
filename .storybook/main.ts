import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [    
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
