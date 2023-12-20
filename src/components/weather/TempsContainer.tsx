import { Box, Divider } from "@mui/material";
import TempDisplay from "./TempDisplay";
import { WeatherData } from "./WeatherWidget";

interface Props {
  weatherData: WeatherData;
  unit: string;
}

const TempsContainer = ({ weatherData, unit }: Props) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          m: 1,
          p: 1,
          boxShadow: 4,
          bgcolor: "white",
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <TempDisplay unit={unit} temperature={weatherData.currentTemp} />
        <Divider sx={{ ml: 1 }} orientation="vertical" flexItem />
        <Box component="div" sx={{ m: 1 }}>
          {weatherData.currentWeather[0].description}
        </Box>
      </Box>
    </>
  );
};

export default TempsContainer;
