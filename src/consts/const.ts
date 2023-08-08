import { Region, WeatherStateType } from "../types/types";

export const API =
  "http://api.weatherapi.com/v1/forecast.json?key=0c7edaee851a4bb2b65143314232907&q=Kyrghyzstan&lang=ru";

export const data: Region[] = [
  { id: 0, label: "Kyrgyzstan", region: "kg" },
  { id: 1, label: "Russian", region: "ru" },
  { id: 2, label: "Kazakhstan", region: "kz" },
  { id: 3, label: "Uzbekistan", region: "uz" },
  { id: 4, label: "Tajikistan", region: "tj" },
];

export const initialState: WeatherStateType = {
  location: null,
  current: null,
  forecast: null,
  language: "kg",
  forecastWeek: null,
};
