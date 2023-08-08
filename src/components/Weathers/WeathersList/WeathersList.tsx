import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { getWeatherWeek } from "../../../redux/weatherAction";
import { WeatherForcastDayType } from "../../../types/types";
import WeatherCard from "../WeaterCard/WeatherCard";

import "./style/index.css";

interface InitialTabsT {
  title: string;
  id: number;
}

const WeathersList = () => {
  const initialTabs: InitialTabsT[] = [
    { title: "На неделю", id: 1 },
    { title: "на менсяц", id: 2 },
    { title: "На 10 Дней", id: 3 },
  ];

  const [activeTab, setActiveTab] = useState<number>(initialTabs[0].id);

  const dispatch = useAppDispatch();

  const { forecastWeek } = useAppSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(getWeatherWeek());
  }, []);

  console.log(forecastWeek);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs_wrapper_relative">
      <div className="tabs_wrapper">
        <ul className="tab-list">
          {initialTabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab ? "active" : ""}
              onClick={() => handleTabClick(tab.id)}>
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {forecastWeek?.forecastday?.map(
            (tab: WeatherForcastDayType, index: number) => (
              <WeatherCard key={index} day={tab} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WeathersList;
