import React, { useState, useEffect } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import Loader from "react-loader-spinner";
import { getCityWeather } from "../../services/api";

import InputText from "../InputText/InputText";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import CardDetail from "../CardDetail/CardDetail";

export default function Main() {
  const [RJ, setRJ] = useState({});
  const [SP, setSP] = useState({});
  const [BH, setBH] = useState({});
  const [DF, setDF] = useState({});
  const [BL, setBL] = useState({});
  const [SV, setSV] = useState({});
  const [CR, setCR] = useState({});
  const [FL, setFL] = useState({});
  const [MN, setMN] = useState({});
  const [JP, setJP] = useState({});

  const [weatherCity, setWeatherCity] = useState({});
  const [loading, setLoading] = useState(false);

  const onSearch = async cityName => {
    try {
      const response = await getCityWeather(cityName);
      setWeatherCity(response.data);
    } catch (error) {
      console.log("onSearch error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const responseRJ = await getCityWeather("Rio de Janeiro");
      const rj = {
        min: responseRJ.data.data[0].low_temp,
        max: responseRJ.data.data[0].max_temp
      };
      setRJ(rj);

      const responseSP = await getCityWeather("São Paulo");
      const sp = {
        min: responseSP.data.data[0].low_temp,
        max: responseSP.data.data[0].max_temp
      };
      setSP(sp);

      const responseBH = await getCityWeather("Belo Horizonte");
      const bh = {
        min: responseBH.data.data[0].low_temp,
        max: responseBH.data.data[0].max_temp
      };
      setBH(bh);

      const responseDF = await getCityWeather("Brasília");
      const df = {
        min: responseDF.data.data[0].low_temp,
        max: responseDF.data.data[0].max_temp
      };
      setDF(df);

      const responseBL = await getCityWeather("Belém");
      const bl = {
        min: responseBL.data.data[0].low_temp,
        max: responseBL.data.data[0].max_temp
      };
      setBL(bl);

      const responseSV = await getCityWeather("Salvador");
      const sv = {
        min: responseSV.data.data[0].low_temp,
        max: responseSV.data.data[0].max_temp
      };
      setSV(sv);

      const responseCR = await getCityWeather("Curitiba");
      const cr = {
        min: responseCR.data.data[0].low_temp,
        max: responseCR.data.data[0].max_temp
      };
      setCR(cr);

      const responseFL = await getCityWeather("Fortaleza");
      const fl = {
        min: responseFL.data.data[0].low_temp,
        max: responseFL.data.data[0].max_temp
      };
      setFL(fl);

      const responseMN = await getCityWeather("Manaus");
      const mn = {
        min: responseMN.data.data[0].low_temp,
        max: responseMN.data.data[0].max_temp
      };
      setMN(mn);

      const responseJP = await getCityWeather("João Pessoa");
      const jp = {
        min: responseJP.data.data[0].low_temp,
        max: responseJP.data.data[0].max_temp
      };
      setJP(jp);

      setLoading(false);
    } catch (error) {
      console.log("fetchData", error);
    }
  };

  const round = number => {
    return Math.round(number);
  };

  return (
    <div className="main-container">
      {loading ? (
        <div className="d-flex align-items-center">
          <Loader
            type="Puff"
            color="#FFF"
            height={100}
            width={100}
            //  timeout={3000} //3 secs
          />
        </div>
      ) : (
        <div className="main-div">
          <div className="main-search">
            <label className="main-lbl">Previsão do Tempo</label>

            {_.size(weatherCity) > 0 && (
              <div>
                <CardDetail
                  data={weatherCity}
                  onClose={() => setWeatherCity({})}
                />
              </div>
            )}

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
              <div className="col-sm-1 main-bold">{round(RJ.min)}°</div>
              <div className="col-sm-1 main-bold">{round(RJ.max)}°</div>
              <div className="col-sm-4 main-bold">Rio de Janeiro</div>
              <div className="col-sm-1 main-bold">{round(SV.min)}°</div>
              <div className="col-sm-1 main-bold">{round(SV.max)}°</div>
              <div className="col-sm-4 main-bold">Salvador</div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-1 main-bold">{round(SP.min)}°</div>
              <div className="col-sm-1 main-bold">{round(SP.max)}°</div>
              <div className="col-sm-4 main-bold">São Paulo</div>
              <div className="col-sm-1 main-bold">{round(CR.min)}°</div>
              <div className="col-sm-1 main-bold">{round(CR.max)}°</div>
              <div className="col-sm-4 main-bold">Curitiba</div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-1 main-bold">{round(BH.min)}°</div>
              <div className="col-sm-1 main-bold">{round(BH.max)}°</div>
              <div className="col-sm-4 main-bold">Belo Horizonte</div>
              <div className="col-sm-1 main-bold">{round(FL.min)}°</div>
              <div className="col-sm-1 main-bold">{round(FL.max)}°</div>
              <div className="col-sm-4 main-bold">Fortaleza</div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-1 main-bold">{round(DF.min)}°</div>
              <div className="col-sm-1 main-bold">{round(DF.max)}°</div>
              <div className="col-sm-4 main-bold">Brasília</div>
              <div className="col-sm-1 main-bold">{round(MN.min)}°</div>
              <div className="col-sm-1 main-bold">{round(MN.max)}°</div>
              <div className="col-sm-4 main-bold">Manaus</div>
            </div>
            <div className="row">
              <div className="col-sm-1 main-bold">{round(BL.min)}°</div>
              <div className="col-sm-1 main-bold">{round(BL.max)}°</div>
              <div className="col-sm-4 main-bold">Belém</div>
              <div className="col-sm-1 main-bold">{round(JP.min)}°</div>
              <div className="col-sm-1 main-bold">{round(JP.max)}°</div>
              <div className="col-sm-4 main-bold">João Pessoa</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
