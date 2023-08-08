import React, { FC, useEffect } from "react";
import ChangeColorLogo from "../../assets/logo/ChangeColorLogo";
import Logo from "../../assets/logo/Logo";
import { useAppDispatch } from "../../redux/hooks";
import { getWeather } from "../../redux/weatherAction";
import SelectRegion from "../SelectRegion/SelectRegion";
import "./style/index.css";

const Navbar: React.FC = () => {
  return (
    <div className="container">
      <div className="header_nav">
        <div className="nav_item">
          <Logo />
          <h1>REACT WEATHER</h1>
        </div>
        <div className="nav_item">
          <ChangeColorLogo />
          <SelectRegion />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
