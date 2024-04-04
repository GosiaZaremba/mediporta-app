import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomSnackBar } from './CustomSnackBar';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../themes/theme';
import { CssBaseline } from '@mui/material';

const meta: Meta<typeof CustomSnackBar> = {
	title: '/components/atoms/CustomSnackBar',
	component: CustomSnackBar,
	decorators: [
		(Story) => {
			return (
				<ThemeProvider theme={theme}>
					<Provider store={store}>
						<CssBaseline />
						<Story />
					</Provider>
				</ThemeProvider>
			);
		},
	],
	argTypes: {
		open: { control: 'boolean' },
		message: { control: 'text' },
	},
};

export default meta;
type Story = StoryObj<typeof CustomSnackBar>;

export const Default: Story = {
	args: {
		anchorOrigin: { vertical: 'top', horizontal: 'center' },
		open: true,
		message: 'SnackBar Message',
	},
};
