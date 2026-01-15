import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import portfolioReducer from "./portfolioSlice";

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        portfolio: portfolioReducer,
    },
});