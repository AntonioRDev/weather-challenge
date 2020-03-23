import axios from "axios";
const API_KEY = "a110dc149dab4574995abc097292d7d2";

export const getCityWeather = cityName => {
  return axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName},BR&key=${API_KEY}&lang=pt`
  );
};
