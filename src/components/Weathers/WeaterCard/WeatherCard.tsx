import React, { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import {
  WeatherForcastAllType,
  WeatherForcastDayType,
} from "../../../types/types";

import "./style/index.css";

type WeatherCardProps = {
  day: WeatherForcastDayType;
};

const WeatherCard: FC<WeatherCardProps> = ({ day }) => {
  const { location } = useAppSelector((state: RootState) => state.weather);
  const { date, day: weatherDay, astro, hour } = day;

  const checkDayWeek = () => {
    const dateObject = new Date(date);

    // Получение дня недели в виде числа (0 для воскресенья, 1 для понедельника и т.д.)
    const dayOfWeekNumber = dateObject.getDay();

    // Преобразование числа дня недели в название дня
    const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "ЧТ", "Пц", "Сб"];
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    return dayOfWeekName;
  };

  const handleCheckMounth = () => {
    // Шаг 1: Разбиваем строку на год, месяц и день
    const [year, month, day] = date?.split("-");

    // Шаг 2: Получаем название месяца
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const monthName = months[parseInt(month, 10) - 1]; // Месяцы нумеруются с 0, поэтому вычитаем 1.

    // Шаг 3: Форматируем дату и месяц
    const formattedDate = `${day} ${monthName}`;
    return formattedDate;
  };

  const handleCheckCondition = () => {
    const splitedLocation = location?.localtime.split(" ")[1];
    const dataTime = day.astro;
    const splitedTime = splitedLocation?.split(":");
    const splitedAstroSun = dataTime?.sunset.split(" ")[0].split(":");

    // Check if splitedTime is defined before proceeding
    if (splitedTime) {
      const currentTimeHours = parseInt(splitedTime[0], 10);
      const sunsetTimeHours = parseInt(splitedAstroSun?.[0] || "0", 10); // Use 0 as a fallback value if splitedAstroSun?.[0] is undefined

      // Если текущее время больше времени заката
      // ИЛИ текущее время меньше времени заката, но меньше чем 12 часов (ночь до полуночи)
      if (day?.day.condition.text.includes("Солнечно")) {
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 119 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z"
              fill="url(#paint0_linear_2_438)"
            />
            <path
              d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z"
              fill="#FFB300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_438"
                x1="59.5229"
                y1="31.0143"
                x2="59.5229"
                y2="87.2546"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC227" />
                <stop offset="1" stopColor="#FFB300" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else if (day?.day.condition.text.includes("облачно")) {
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 44 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28 24C32.4183 24 36 20.4183 36 16C36 11.5817 32.4183 8 28 8C23.5817 8 20 11.5817 20 16C20 20.4183 23.5817 24 28 24Z"
              fill="url(#paint0_linear_0_1)"
            />
            <path
              d="M26.96 1.45999L27.48 4.41399C27.828 6.38399 24.872 6.90399 24.526 4.93399L24.006 1.97999C23.658 0.00998566 26.614 -0.510014 26.96 1.45999ZM37.546 4.98199L35.826 7.43999C34.678 9.07799 32.222 7.35799 33.368 5.71999L35.088 3.26199C36.236 1.62399 38.692 3.34399 37.546 4.98199ZM16.984 6.45399L19.442 8.17399C21.08 9.32199 19.36 11.778 17.722 10.632L15.264 8.91199C13.626 7.76399 15.346 5.30799 16.984 6.45399ZM38.282 21.366L40.74 23.086C42.378 24.234 40.658 26.69 39.02 25.544L36.562 23.824C34.924 22.676 36.644 20.22 38.282 21.366ZM42.542 14.958L39.588 15.478C37.618 15.826 37.098 12.87 39.068 12.524L42.022 12.004C43.992 11.656 44.512 14.612 42.542 14.958Z"
              fill="#FFB300"
            />
            <path
              d="M8 34C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C11.518 14.68 14.946 12 19 12C23.97 12 28 16.03 28 21C28 21.47 27.964 21.93 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8Z"
              fill="url(#paint1_linear_0_1)"
            />
            <path
              d="M10 21C10 25.97 14.03 30 19 30C23.502 30 27.23 26.696 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C10.136 19.198 10 20.082 10 21Z"
              fill="url(#paint2_radial_0_1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="36"
                y1="8"
                x2="24.7832"
                y2="19.0723"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFB301" />
                <stop offset="1" stopColor="#FFC533" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="18"
                y1="12"
                x2="18"
                y2="34"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#9FC7FF" />
                <stop offset="1" stopColor="#9BC1F5" />
              </linearGradient>
              <radialGradient
                id="paint2_radial_0_1"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
                <stop stopColor="#486DA8" stopOpacity="0.4" />
                <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        );
      } else if (day.day.condition.text.includes("дождь")) {
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.218 26.926L8.11798 31.924C7.79798 32.688 8.15598 33.568 8.91998 33.888C9.68398 34.208 10.564 33.85 10.884 33.086L12.984 28.088C13.304 27.324 12.946 26.444 12.182 26.124C11.418 25.804 10.538 26.162 10.218 26.926ZM20.218 24.926L18.118 29.924C17.798 30.688 18.156 31.568 18.92 31.888C19.684 32.208 20.564 31.85 20.884 31.086L22.984 26.088C23.304 25.324 22.946 24.444 22.182 24.124C21.418 23.804 20.538 24.162 20.218 24.926Z"
              fill="#66AFEB"
            />
            <path
              d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
              fill="url(#paint0_linear_2_288)"
            />
            <path
              d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
              fill="url(#paint1_radial_2_288)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_288"
                x1="18"
                y1="0"
                x2="18"
                y2="22"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#9FC7FF" />
                <stop offset="1" stop-color="#9BC1F5" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_2_288"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
                <stop stop-color="#486DA8" stop-opacity="0.4" />
                <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        );
      } else {
        return (
          <svg
            width="119"
            height="119"
            viewBox="0 0 36 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
              fill="url(#paint0_linear_2_290)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_290"
                x1="18"
                y1="0"
                x2="18"
                y2="22"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#9FC7FF" />
                <stop offset="1" stopColor="#9BC1F5" />
              </linearGradient>
            </defs>
            <path
              d="M10 3C10 7.97 14.03 12 19 12C23.502 12 27.23 8.696 27.894 4.38C28.55 4.134 29.258 4 30 4C33.314 4 36 6.686 36 10C36 13.314 33.314 16 30 16H8C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C8.834 0 9.636 0.128 10.392 0.364C10.136 1.198 10 2.082 10 3Z"
              fill="url(#paint0_radial_2_291)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_2_291"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(4.75395 -36.6966) rotate(-90) scale(20.9574 6.69705)">
                <stop stopColor="#486DA8" stopOpacity="0.4" />
                <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        );
      }
    } else {
      console.log("Could not determine the current time.");
    }
  };

  const dayWeek = checkDayWeek();

  const mounth = handleCheckMounth();

  const condition = handleCheckCondition();

  return (
    <div className="weather_day_week_card">
      <h3>{dayWeek}</h3>
      <p className="mounth_week">{mounth}</p>
      <div className="week_condition">{condition}</div>
      <p className="maxtemp_week">{day && Math.floor(day.day.maxtemp_c)}°</p>
      <p className="mintemp_week">{day && Math.floor(day.day.mintemp_c)}°</p>
      <p className="mintemp_week">{day?.day.condition.text}</p>
    </div>
  );
};

export default WeatherCard;
