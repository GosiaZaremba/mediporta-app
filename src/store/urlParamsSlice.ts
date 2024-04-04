import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ULRState {
	pageNumber: number;
	pageSize: number;
	order: 'asc' | 'desc';
	sortBy: 'name' | 'popular';
}

const initialState: ULRState = {
	pageNumber: 1,
	pageSize: 5,
	order: 'desc',
	sortBy: 'popular',
};

export const numberSlice = createSlice({
	name: 'URL params',
	initialState,
	reducers: {
		setNumber: (
			state,
			action: PayloadAction<{ key: 'pageNumber' | 'pageSize'; value: number }>
		) => {
			if (action.payload.key === 'pageNumber') {
				if (action.payload.value >= 1 && action.payload.value <= 25) {
					state[action.payload.key] = action.payload.value;
				}
			}
			if (action.payload.key === 'pageSize') {
				if (action.payload.value >= 1 && action.payload.value <= 100) {
					state[action.payload.key] = action.payload.value;
				}
			}
		},
		setOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
			state.order = action.payload;
		},
		setSortBy: (state, action: PayloadAction<'name' | 'popular'>) => {
			state.sortBy = action.payload;
		},
	},
});

export const { setNumber, setOrder, setSortBy } = numberSlice.actions;

export default numberSlice.reducer;
