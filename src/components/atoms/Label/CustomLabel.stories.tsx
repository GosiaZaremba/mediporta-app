import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomLabel } from './CustomLabel';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../themes/theme';
import { CssBaseline } from '@mui/material';

const meta: Meta<typeof CustomLabel> = {
	title: '/components/atoms/CustomLabel',
	component: CustomLabel,
	decorators: [
		(Story) => {
			return (
				<ThemeProvider theme={theme}>
					<CssBaseline />

					<Story />
				</ThemeProvider>
			);
		},
	],
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
