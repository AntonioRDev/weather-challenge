import React from "react";
import "./CardDetail.css";

import ArrowUp from "../../icons/arrow_up.svg";
import ArrowDown from "../../icons/arrow_down.svg";
import Close from "../../icons/close.svg";

export default function CardDetail({ onClose, data }) {
  const getAppTemp = () => {
    const app_max = data.data[0].app_max_temp;
    const app_min = data.data[0].app_min_temp;

    return (app_max + app_min) / 2;
  };

  const convertKmH = ms => {
    const kmH = ms * 3.6;

    const response = kmH.toFixed(2);
    return response;
  };

  const round = number => {
    return Math.round(number);
  };

  return (
    <div className="cd-container">
      <div className="cd-top-container">
        <label className="cd-top-label">{data.city_name} - Brasil</label>
        <img
          src={Close}
          alt="Fechar"
          height={18}
          className="cursor-pointer"
          onClick={() => onClose()}
        />
      </div>

      <div className="d-flex mb-3">
        <label className="cd-main-label">{round(data.data[0].temp)}°C</label>

        <div className="cd-main-label cd-weather">
          {data.data[0].weather.description}
        </div>
      </div>

      <div className="d-flex">
        <div className="mr-2">
          <img src={ArrowDown} alt="Mínima" height={18} />
          <label className="cd-bold">{round(data.data[0].min_temp)}°</label>
        </div>
        <div className="mr-5">
          <img src={ArrowUp} alt="Máxima" height={18} />
          <label className="cd-bold">{round(data.data[0].max_temp)}°</label>
        </div>
        <label>
          Sensação <strong className="cd-bold">{round(getAppTemp())}°C</strong>
        </label>
      </div>

      <div className="mb-2">
        <label className="mr-5">
          Vento{" "}
          <strong className="cd-bold">
            {round(convertKmH(data.data[0].wind_spd))}km/h
          </strong>
        </label>
        <label>
          Humidade <strong className="cd-bold">{data.data[0].rh}%</strong>
        </label>
      </div>

      {/* <HorizontalLine color="#ff8409" />

      <div class="d-flex justify-content-between pt-3 pl-3">
        <div>
          <div className="row cd-bold">Terça</div>
          <div className="row">
            <div className="cd-orange-bold mr-1">18°</div>
            <div className="cd-orange-bold">26°</div>
          </div>
        </div>

        <div>
          <div className="row cd-bold">Quarta</div>
          <div className="row">
            <div className="cd-orange-bold mr-1">18°</div>
            <div className="cd-orange-bold">28°</div>
          </div>
        </div>

        <div>
          <div className="row cd-bold">Quinta</div>
          <div className="row">
            <div className="cd-orange-bold mr-1">19°</div>
            <div className="cd-orange-bold">30°</div>
          </div>
        </div>

        <div>
          <div className="row cd-bold">Sexta</div>
          <div className="row">
            <div className="cd-orange-bold mr-1">23°</div>
            <div className="cd-orange-bold">35°</div>
          </div>
        </div>

        <div>
          <div className="row cd-bold">Sábado</div>
          <div className="row">
            <div className="cd-orange-bold mr-1">23°</div>
            <div className="cd-orange-bold">37°</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
