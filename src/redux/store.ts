import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./weatherSlicer";
import { ThunkDispatch } from "redux-thunk";

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, undefined, any>;
