import { createSlice, Slice } from "@reduxjs/toolkit";
import { initialState } from "../consts/const";
import { WeatherStateType } from "../types/types";
import { getWeather, getWeatherWeek } from "./weatherAction";

export const weatherSlice: Slice<WeatherStateType, {}, string> = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.current = payload?.current;
      state.forecast = payload?.forecast;
      state.location = payload?.location;
    });
    builder.addCase(getWeatherWeek.fulfilled, (state, { payload }) => {
      state.forecastWeek = payload.forecast;
    });
  },
});

export default weatherSlice.reducer;
