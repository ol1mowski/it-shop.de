import { configureStore } from "@reduxjs/toolkit";
import indexSlice from "./indexState";
import widthSlice from "./widthState";

const store = configureStore({
    reducer: {
        indexSlice: indexSlice.reducer,
        widthSlice: widthSlice.reducer,
    }
});

export default store;
