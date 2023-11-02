import { createSlice } from "@reduxjs/toolkit";

const initialState = { width: 0 };

const widthSlice = createSlice({
  name: "width",
  initialState: initialState,
  reducers: {
    changeWidth: (state, action) => {
      state.width = action.payload; // Zaktualizowano state.width
    },
  },
});

export const { changeWidth } = widthSlice.actions;

export default widthSlice;
