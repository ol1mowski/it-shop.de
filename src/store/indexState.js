import { createSlice } from "@reduxjs/toolkit";

const initialState = { index: 0 }

const indexSlice = createSlice({
    name: 'indexState',
    initialState: initialState,
    reducers: {
        setIndex: (state, action) => {
            state.index = action.payload;
        },
        increment: (state) => {
            state.index = state.index + 1;
        },
        decrement: (state) => {
            state.index = state.index - 1;
        },

    }
});

export const { setIndex, increment, decrement } = indexSlice.actions;

export default indexSlice;
