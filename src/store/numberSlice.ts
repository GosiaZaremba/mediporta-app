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
      if (action.payload.key === "pageNumber") {
        if (action.payload.value >= 1 && action.payload.value <= 25) {
          state[action.payload.key] = action.payload.value;
        }
      }
      if (action.payload.key === "pageSize") {
        if (action.payload.value >= 1 && action.payload.value <= 100) {
          state[action.payload.key] = action.payload.value;
        }
      }
    },
  },
});

export const { setNumber } = numberSlice.actions;

export default numberSlice.reducer;
