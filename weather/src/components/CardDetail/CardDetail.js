import React from "react";

import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function CardDetail({ onClose, data }) {
  const getAppTemp = () => {
    const app_max = data.data[0].app_max_temp;
    const app_min = data.data[0].app_min_temp;

    return (app_max + app_min) / 2;
  };

  const convertKmH = (ms) => {
    const kmH = ms * 3.6;

    const response = kmH.toFixed(2);
    return response;
  };

  const round = (number) => {
    return Math.round(number);
  };

  return (
    <div className="w-full bg-card-bg px-12 py-4">
      <div className="flex justify-between items-center mb-3">
        <label className="font-bold text-card-text mr-36">
          {data.city_name} - Brasil
        </label>

        <div className="cursor-pointer" onClick={() => onClose()}>
          <IoMdClose color="orange" size={22}/>
        </div>
      </div>

      <div className="flex mb-3">
        <label className="font-bold text-card-text text-3xl">
          {round(data.data[0].temp)}°C
        </label>

        <div className="font-bold text-card-text text-3xl pl-5 text-left max-w-xs">
          {data.data[0].weather.description}
        </div>
      </div>

      <div className="flex mb-3">
        <div className="flex mr-2">
          <div className="pt-1">
            <FaArrowDown color="orange" />
          </div>

          <label className="font-bold text-card-text">
            {round(data.data[0].min_temp)}°
          </label>
        </div>

        <div className="flex mr-5">
          <div className="pt-1">
            <FaArrowUp color="orange" />
          </div>

          <label className="font-bold text-card-text">
            {round(data.data[0].max_temp)}°
          </label>
        </div>

        <label>
          Sensação{" "}
          <strong className="font-bold text-card-text">
            {round(getAppTemp())}°C
          </strong>
        </label>
      </div>

      <div className="mb-2">
        <label className="mr-5">
          Vento{" "}
          <strong className="font-bold text-card-text">
            {round(convertKmH(data.data[0].wind_spd))}km/h
          </strong>
        </label>

        <label>
          Humidade{" "}
          <strong className="font-bold text-card-text">
            {data.data[0].rh}%
          </strong>
        </label>
      </div>
    </div>
  );
}
