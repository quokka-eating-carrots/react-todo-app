import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

export const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
