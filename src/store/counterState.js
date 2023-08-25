import { createSlice } from "@reduxjs/toolkit";

const shopCountInitialState = { counter: 0, totalPrice: 0, };

const counterSlice = createSlice({
    name: 'counter',
    initialState: shopCountInitialState,
    reducers: {
        addCours(state) {
            state.counter++;
        },
        removeCours(state) {
            state.counter--;
        },
        addPrice(state) {
            state.totalPrice = state.totalPrice - state.totalPrice;
        },
        removePrice(state) {
            state.totalPrice = state.totalPrice - state.totalPrice;
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;