import { Snackbar, SnackbarOrigin } from '@mui/material';
import React from 'react';

export type Props = {
	anchorOrigin: SnackbarOrigin;
	open: boolean;
	message: string;
	onClose: () => void;
};

export const CustomSnackBar: React.FC<Props> = ({
	anchorOrigin,
	open,
	message,
	onClose,
}) => {
	return (
		<Snackbar
			anchorOrigin={anchorOrigin}
			open={open}
			message={message}
			onClose={onClose}
		/>
	);
};
