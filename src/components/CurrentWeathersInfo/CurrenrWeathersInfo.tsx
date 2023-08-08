import React from "react";

import "./style/index.css";

import thermometer from "../../assets/images/thermometer.png";
import ellips from "../../assets/images/ellips.png";
import humidity from "../../assets/images/humidity.png";
import precip from "../../assets/images/precip.png";
import wind from "../../assets/images/wind.png";
import obloko from "../../assets/images/obloko.png";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const CurrenrWeathersInfo = () => {
  const { current } = useAppSelector((state: RootState) => state.weather);

  return (
    <div className="weather_info_data">
      <p>
        <span>
          <img src={ellips} alt="ellips" />
          <img src={thermometer} alt="thermometer" />
        </span>
        <span>Температура</span>
        {current ? Math.floor(current.temp_c) : 0}° - ощущается как
        {current ? Math.floor(current.feelslike_c) : 0}°
      </p>
      <p>
        <span>
          <img src={ellips} alt="ellips" />
          <img
            width={"19px"}
            height={"19px"}
            src={humidity}
            alt="thermometer"
          />
        </span>
        <span>Давление</span>
        {current?.pressure_in} ртутного столба
      </p>
      <p>
        <span>
          <img src={ellips} alt="ellips" />
          <img src={precip} alt="thermometer" />
        </span>
        <span>Осадки</span>
        {current?.precip_in && current.precip_in > 0
          ? `${current.precip_in}`
          : "Без осадков"}
      </p>
      <p>
        <span>
          <img src={ellips} alt="ellips" />
          <img style={{ width: "22px" }} src={wind} alt="thermometer" />
        </span>
        <span>Ветер</span>
        {current?.gust_mph && current.gust_mph <= 0
          ? "Без ветра"
          : `${current?.gust_mph} М/С`}
      </p>
      <img
        className="weather_info_data_background"
        src={obloko}
        alt="background"
      />
    </div>
  );
};

export default CurrenrWeathersInfo;
