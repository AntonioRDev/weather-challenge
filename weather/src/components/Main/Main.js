import React, { useState, useEffect } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCityWeather } from "../../services/api";

import InputText from "../InputText/InputText";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import CardDetail from "../CardDetail/CardDetail";

export default function Main() {
  const onSearch = cityName => {
    getCityWeather(cityName)
      .then(data => console.log("data", data))
      .catch(error => console.log(error));
  };

  return (
    <div className="main-container">
      <div className="main-div">
        <div className="main-search">
          <label className="main-lbl">Previsão do Tempo</label>

          {/* <div>
            <CardDetail />
          </div> */}

          <InputText onSearch={searchValue => onSearch(searchValue)} />
        </div>

        <div className="main-hr">
          <HorizontalLine />
        </div>

        <div className="pt-5 pl-5">
          <label className="main-lbl-1">Capitais</label>

          <div className="row mb-3">
            <div className="col-sm-1">Min</div>
            <div className="col-sm-1">Máx</div>
            <div className="col-sm-4"></div>
            <div className="col-sm-1">Min</div>
            <div className="col-sm-1">Máx</div>
            <div className="col-sm-4"></div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-1 main-bold">18°</div>
            <div className="col-sm-1 main-bold">27°</div>
            <div className="col-sm-4 main-bold">Rio de Janeiro</div>
            <div className="col-sm-1 main-bold">23°</div>
            <div className="col-sm-1 main-bold">37°</div>
            <div className="col-sm-4 main-bold">Salvador</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-1 main-bold">14°</div>
            <div className="col-sm-1 main-bold">22°</div>
            <div className="col-sm-4 main-bold">São Paulo</div>
            <div className="col-sm-1 main-bold">5°</div>
            <div className="col-sm-1 main-bold">14°</div>
            <div className="col-sm-4 main-bold">Curitiba</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-1 main-bold">21°</div>
            <div className="col-sm-1 main-bold">32°</div>
            <div className="col-sm-4 main-bold">Belo Horizonte</div>
            <div className="col-sm-1 main-bold">21°</div>
            <div className="col-sm-1 main-bold">32°</div>
            <div className="col-sm-4 main-bold">Fortaleza</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-1 main-bold">24°</div>
            <div className="col-sm-1 main-bold">37°</div>
            <div className="col-sm-4 main-bold">Brasília</div>
            <div className="col-sm-1 main-bold">21°</div>
            <div className="col-sm-1 main-bold">32°</div>
            <div className="col-sm-4 main-bold">Manaus</div>
          </div>
          <div className="row">
            <div className="col-sm-1 main-bold">24°</div>
            <div className="col-sm-1 main-bold">37°</div>
            <div className="col-sm-4 main-bold">Belém</div>
            <div className="col-sm-1 main-bold">28°</div>
            <div className="col-sm-1 main-bold">40°</div>
            <div className="col-sm-4 main-bold">João Pessoa</div>
          </div>
        </div>
      </div>
    </div>
  );
}
