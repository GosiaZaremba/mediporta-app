import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NumberState {
  pageNumber: number;
  pageSize: number;
}

const initialState: NumberState = {
  pageNumber: 1,
  pageSize: 10,
};

export const numberSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    setNumber: (
      state,
      action: PayloadAction<{ key: "pageNumber" | "pageSize"; value: number }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setNumber } = numberSlice.actions;

export default numberSlice.reducer;
