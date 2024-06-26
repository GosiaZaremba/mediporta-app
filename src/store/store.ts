import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './urlParamsSlice';

export const store = configureStore({
	reducer: {
		URLparams: numberReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
