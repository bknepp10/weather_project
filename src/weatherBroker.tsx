const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API;

import axios from "axios";

export const getWeatherData = async () => {
  const params = {
    lat: "36.0618",
    lon: "-80.2477",
    appid: API_KEY,
  };
  const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${params.lat}&lon=${params.lon}&appid=${params.appid}`;

  const resp = await axios.get(URL);

  switch (resp.status) {
    case 200:
      return formatWeatherData(resp.data);
    default:
      // TODO Error handling
      console.log("couldn't find weather data");
  }
};

const formatWeatherData = (weatherData: any) => {
  return {
    currentWeather: formatCurrentWeather(weatherData.current),
    hourlyWeather: formatHourlyWeather(weatherData.hourly),
    dailyWeather: formatDailyWeather(weatherData.daily),
  };
};

const formatCurrentWeather = (currentNode) => {
  return {
    ...formatWeatherNode(currentNode),
    temps: [currentNode.temp],
  };
};

const formatHourlyWeather = (hourlyNodes) => {
  return hourlyNodes.map((node) => {
    return {
      ...formatWeatherNode(node),
      temps: [node.temp],
      feelsLike: null,
    };
  });
};
const formatDailyWeather = (dailyNodes) => {
  return dailyNodes.map((node) => {
    return {
      ...formatWeatherNode(node),
      temps: [node.temp.min, node.temp.day, node.temp.max],
      feelsLike: null,
    };
  });
};

const formatWeatherNode = (weatherNode) => {
  return {
    datetime: weatherNode.dt,
    iconData: weatherNode.weather[0],
    humidity: weatherNode.humidity,
  };
};

// ℉=((K-273.15)*1.8)+32
// ℃=K-273.15

//TODO daily:
// weather card schema {
//   id
//   size
//   unit
//   iconData
//   weatherData //TODO need to standardize
// }

// weather node {
//   temps: []
//   humidity
//   datetime
//   feelsLike

// }
