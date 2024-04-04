import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputWLabel } from './InputWLabel';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../themes/theme';
import { CssBaseline } from '@mui/material';

const meta: Meta<typeof InputWLabel> = {
	title: '/components/molecules/InputWLabel',
	component: InputWLabel,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<CssBaseline />
					<Story />
				</Provider>
			</ThemeProvider>
		),
	],
	argTypes: {
		inputLabel: { control: 'text' },
		inputKey: { control: 'text' },
	},
};

export default meta;
type Story = StoryObj<typeof InputWLabel>;

export const Default: Story = {
	args: {
		inputLabel: 'Input Label',
	},
};
