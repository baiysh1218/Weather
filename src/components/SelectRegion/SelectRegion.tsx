import React, { useEffect, useState } from "react";
import { data } from "../../consts/const";
import { useAppDispatch } from "../../redux/hooks";
import { getWeather } from "../../redux/weatherAction";
import { Region } from "../../types/types";
import "./style/index.css";

const SelectRegion: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState<Region[]>(data);
  const [selectedItem, setSelectedItem] = useState<Region | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (itemClicked: Region) => {
    setSelectedItem(itemClicked);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find(item => item.id === selectedItem.id)?.label ||
            "Выбрать регион"
          : "Выбрать регион"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map(item => (
          <div
            className="dropdown-item"
            onClick={() => {
              handleItemClick(item);
              toggleDropdown();
            }}
            key={item.id} // Add a unique key prop for each item
          >
            <span
              className={`dropdown-item-dot ${
                item.id === selectedItem?.id && "selected"
              }`}>
              •
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRegion;
