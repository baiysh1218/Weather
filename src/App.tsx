import React from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import CurrenrWeathersInfo from "./components/CurrentWeathersInfo/CurrenrWeathersInfo";
import Navbar from "./components/Navbar/Navbar";
import WeathersList from "./components/Weathers/WeathersList/WeathersList";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="current_weather_wrapper">
          <CurrentWeather />
          <CurrenrWeathersInfo />
        </div>
        <WeathersList />
      </div>
    </>
  );
}

export default App;
