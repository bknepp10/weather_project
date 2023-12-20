import HumidityDisplay from "./HumidityDisplay";
import { Box } from "@mui/material";
import { WeatherData } from "./WeatherWidget";

interface Props {
  weatherData: WeatherData;
}
const HumidityContainer = ({ weatherData }: Props) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          my: 1,
          p: 1,
          borderRadius: 5,
          boxShadow: 4,
          display: "inline-flex",
          alignSelf: "center",
          bgcolor: "white",
        }}
      >
        <Box sx={{ mr: 1 }}>Humidity: </Box>
        <HumidityDisplay humidity={weatherData.currentHumidity} />
      </Box>
    </>
  );
};

export default HumidityContainer;
