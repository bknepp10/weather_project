import BasicWeatherCard from "./BasicWeatherCard";
import TempDisplay from "./TempDisplay";
import { Box, Divider, Chip } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import HumidityDisplay from "./HumidityDisplay";
import { WeatherNode } from "../../Types";

interface Props {
  currentWeatherNode: WeatherNode;
  unit: string;
}

const CurrentWeatherDisplay = ({ currentWeatherNode, unit }: Props) => {
  return (
    <>
      <BasicWeatherCard
        key={currentWeatherNode.datetime}
        id={currentWeatherNode.datetime}
        size={2}
        weatherNode={currentWeatherNode}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            bgcolor: "white",
            mt: 1,
            boxShadow: 4,
            borderRadius: 5,
            p: 1,
          }}
        >
          {currentWeatherNode.temps.map((tempNode, index) => {
            return (
              <TempDisplay
                key={`currentweather-${index}`}
                temperature={tempNode}
                unit={unit}
              />
            );
          })}
          <Divider sx={{ mx: 1 }} orientation="vertical" />
          <HumidityDisplay
            key={"current-humidity"}
            humidity={currentWeatherNode.humidity}
          />
        </Box>
        <Chip
          sx={{ mx: "auto", mt: 2, mb: 1, bgcolor: "white" }}
          variant="outlined"
          icon={<LocationOn />}
          label="Winston-Salem, NC"
        />
      </BasicWeatherCard>
    </>
  );
};

export default CurrentWeatherDisplay;
