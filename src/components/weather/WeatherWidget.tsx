import { useState, useEffect } from "react";
import {
  Box,
  Chip,
  Container,
  Divider,
  SelectChangeEvent,
} from "@mui/material";
import { getWeatherData } from "../../weatherBroker";
import { blue } from "@mui/material/colors";
import DailyWeatherDisplay from "./DailyWeatherDisplay";
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import UnitSelector from "./UnitSelector";
import HourlyWeatherDisplay from "./HourlyWeatherDisplay";

export interface WeatherData {
  currentTemp: number;
  currentFeelsLike: number;
  currentHumidity: number;
  currentWeather: any;
  hourlyWeather: any;
  dailyWeather: any;
}

const WeatherWidget = () => {
  const [weatherUnit, setWeatherUnit] = useState("F");
  const [weatherData, setWeatherData] = useState<any>();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const resp = await getWeatherData();
      setWeatherData(resp);
    };

    fetchWeatherData();
  }, []);

  const handleUnitSelect = (event: SelectChangeEvent) => {
    setWeatherUnit(event.target.value);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          mt: 2,
          pb: 2,
          boxShadow: 4,
          borderRadius: 6,
          position: "relative",
        }}
      >
        <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
          <UnitSelector onChange={handleUnitSelect} unitValue={weatherUnit} />
          <Box
            component="span"
            sx={{
              fontSize: 18,
              ml: "auto",
              justifySelf: "right",
              alignSelf: "center",
            }}
          >
            <Chip
              sx={{ mx: "auto", mt: 2, mb: 1, bgcolor: "white" }}
              variant="outlined"
              label={new Date().toLocaleString()}
            />
          </Box>
        </Box>

        {weatherData && (
          <Box
            sx={{
              display: "flex",
              mx: "auto",
              p: 4,
              bgcolor: blue[100],
              flexDirection: "column",
              boxShadow: 3,
              borderRadius: 5,
              justifyContent: "center",
              mb: 1,
            }}
          >
            <Box
              component="div"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CurrentWeatherDisplay
                key={"current-weather"}
                currentWeatherNode={weatherData.currentWeather}
                unit={weatherUnit}
              />
            </Box>

            <Divider sx={{ my: 1 }} variant="middle">
              Hourly
            </Divider>

            <HourlyWeatherDisplay
              key="hourly-weather"
              hourlyWeatherData={weatherData.hourlyWeather}
              unit={weatherUnit}
            />

            <Divider sx={{ my: 1 }} variant="middle">
              Daily
            </Divider>
            <DailyWeatherDisplay
              dailyWeatherData={weatherData.dailyWeather}
              unit={weatherUnit}
            />
          </Box>
        )}
      </Container>
    </>
  );
};

export default WeatherWidget;
