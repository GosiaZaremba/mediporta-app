import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomSnackBar } from './CustomSnackBar';
import { Provider } from 'react-redux';
import { store } from '../../../store/store'; 




const meta: Meta<typeof CustomSnackBar> = {
        title: '/components/atoms/CustomSnackBar',
        component: CustomSnackBar,
        decorators: [(Story) => <Provider store={store}><Story /></Provider>],
        argTypes: {
            open: {control: 'boolean'},
            message: {control: 'text'},

    }

};

export default meta;
type Story = StoryObj<typeof CustomSnackBar>;

export const Default: Story = {
  args: {
    anchorOrigin: {vertical: 'top', horizontal: 'center'},
    open: true,
    message: "SnackBar Message",
  },
};