import axios from "axios";

export const getCityWeather = cityName => {
  return axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName},BR&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&lang=pt`
  );
};
