import React from "react";
import "./Main.css";

import InputText from "../InputText/InputText";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

export default function Main() {
  return (
    <div className="main-container">
      <div className="main-div">
        <div className="main-search">
          <label className="main-lbl">Previsão do Tempo</label>
          <InputText />
        </div>

        <div className="main-hr">
          <HorizontalLine />
        </div>

        <div>
          <label className="main-lbl-1">Capitais</label>

          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
