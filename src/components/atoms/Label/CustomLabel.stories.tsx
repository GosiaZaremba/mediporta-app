import type { Meta, StoryObj } from '@storybook/react';
import { CustomLabel } from './CustomLabel';
 



const meta: Meta<typeof CustomLabel> = {
    title: '/components/atoms/CustomLabel',
    component: CustomLabel,
    argTypes: {
    inputLabel: { control: 'text' },
    inputKey: { control: 'text' },
  },

};

export default meta;
type Story = StoryObj<typeof CustomLabel>;

export const Default: Story = {
  args: {
  inputLabel: 'Input Label',
  inputKey: 'inputKey',
  },
};
