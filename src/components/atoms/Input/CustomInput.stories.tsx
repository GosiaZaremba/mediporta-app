import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomInput } from './CustomInput';
import { Provider } from 'react-redux';
import { store } from '../../../store/store'; 



const meta: Meta<typeof CustomInput> = {
    title: '/components/atoms/CustomInput',
  component: CustomInput,
    decorators: [(Story) => <Provider store={store}><Story /></Provider>],
    argTypes: {
        error: {control: 'boolean'}
    }

};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const Default: Story = {
  args: {
  error: false,
    onChange: () => {
    console.log('Page number changed');
  },
  },
};