import { configureStore } from "@reduxjs/toolkit";
import indexSlice from "./indexState";

const store = configureStore({
    reducer: {
        indexSlice: indexSlice.reducer
    }
});

export default store;
