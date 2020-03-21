import React from "react";
import "./CardDetail.css";

import HorizontalLine from "../HorizontalLine/HorizontalLine";
import ArrowUp from "../../icons/arrow_up.svg";
import ArrowDown from "../../icons/arrow_down.svg";
import Close from "../../icons/close.svg";

export default function CardDetail() {
  return (
    <div className="cd-container">
      <div className="cd-top-container">
        <label className="cd-top-label">Niterói, RJ - Brasil</label>
        <img src={Close} alt="Fechar" height={18} className="cursor-pointer" />
      </div>
      <label className="cd-main-label">20°C Nublado</label>

      <div className="d-flex">
        <div className="mr-2">
          <img src={ArrowDown} alt="Mínima" height={18} />
          <label className="cd-bold">16°</label>
        </div>
        <div className="mr-5">
          <img src={ArrowUp} alt="Máxima" height={18} />
          <label className="cd-bold">25°</label>
        </div>
        <label>
          Sensação <strong className="cd-bold">19°C</strong>
        </label>
      </div>

      <div className="mb-2">
        <label className="mr-5">
          Vento <strong className="cd-bold">18km/h</strong>
        </label>
        <label>
          Humidade <strong className="cd-bold">89%</strong>
        </label>
      </div>

      <HorizontalLine color="#ff8409" />

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
      </div>
    </div>
  );
}
