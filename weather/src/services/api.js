import axios from "axios";
const API_KEY = "85221c32c6777cb7cb5a3885aa3f3c47";

export const getCityWeather = cityName => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=pt`
  );
};
