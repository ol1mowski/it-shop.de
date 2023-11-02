import { createSlice } from "@reduxjs/toolkit"

const initialState = { width: 0 }

const widthSlice = createSlice({
    name: 'width',
    initialState: initialState,
    reducers: {
        changeWidth: (state, action) => {
            state.index = action.payload;
        },
    }
});

export const { changeWidth } = widthSlice.actions;

export default widthSlice;