import {
  createAsyncThunk,
  AsyncThunkPayloadCreatorReturnValue,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../consts/const";
import { WeatherStateType } from "../types/types";

export const getWeather = createAsyncThunk("get/products", async () => {
  try {
    const { data } = await axios(API);

    return data as WeatherStateType;
  } catch (error: any) {
    throw new Error("Ошибка при выполнении запроса на сервер");
  }
});

export const getWeatherWeek = createAsyncThunk("get/weatherWeek", async () => {
  try {
    const { data } = await axios(`${API}&days=7`);
    return data as WeatherStateType;
  } catch (error) {
    throw new Error("Ошибка при выполнении запроса на сервер");
  }
});
