import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { getCityWeather } from "../../services/api";
import _ from "lodash";

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
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-orange-500 to-yellow-400">
      {loading ? (
        <div className="flex items-center">
          <Loader
            type="Puff"
            color="#FFF"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center">
            <label className="text-white text-5xl font-bold mt-8 mb-20">Previsão do Tempo</label>

            {_.size(weatherCity) > 0 && (
              <div className="mb-5">
                <CardDetail
                  data={weatherCity}
                  onClose={() => setWeatherCity({})}
                />
              </div>
            )}

            <InputText onSearch={searchValue => onSearch(searchValue)} />
          </div>

          <div className="mt-16">
            <HorizontalLine />
          </div>

          <div className="pt-5">
            <label className="text-white text-4xl font-bold mb-6">Capitais</label>

            <div className="grid grid-cols-2 gap-x-12 mt-3">
              <div className="col1">
                <div className="flex mb-2">
                  <div className="mr-3">Min</div>
                  <div>Máx</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(RJ.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(RJ.max)}°</div>
                  <div className="font-bold text-lg">Rio de Janeiro</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(SP.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(SP.max)}°</div>
                  <div className="font-bold text-lg">São Paulo</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(BH.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(BH.max)}°</div>
                  <div className="font-bold text-lg">Belo Horizonte</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(DF.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(DF.max)}°</div>
                  <div className="font-bold text-lg">Brasília</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(BL.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(BL.max)}°</div>
                  <div className="font-bold text-lg">Belém</div>
                </div>
              </div>

              <div className="col2">
                <div className="flex mb-2">
                  <div className="mr-3">Min</div>
                  <div>Máx</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(SV.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(SV.max)}°</div>
                  <div className="font-bold text-lg">Salvador</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(CR.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(CR.max)}°</div>
                  <div className="font-bold text-lg">Curitiba</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(FL.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(FL.max)}°</div>
                  <div className="font-bold text-lg">Fortaleza</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(MN.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(MN.max)}°</div>
                  <div className="font-bold text-lg">Manaus</div>
                </div>

                <div className="flex mb-2">
                  <div className="font-bold text-lg mr-3">{round(JP.min)}°</div>
                  <div className="font-bold text-lg mr-3">{round(JP.max)}°</div>
                  <div className="font-bold text-lg">João Pessoa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
