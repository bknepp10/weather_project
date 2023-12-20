import BasicWeatherCard from "./BasicWeatherCard";
import ScrollableWeatherDisplay from "./ScrollableWeatherDisplay";
import TempDisplay from "./TempDisplay";
import HumidityDisplay from "./HumidityDisplay";
import { Box, Divider } from "@mui/material";
import { WeatherNode } from "../../Types";

interface Props {
  hourlyWeatherData: any;
  unit: string;
}

const HourlyWeatherDisplay = ({ hourlyWeatherData, unit }: Props) => {
  console.log("hr", hourlyWeatherData);
  return (
    <>
      <ScrollableWeatherDisplay>
        {hourlyWeatherData.map((node: WeatherNode) => {
          return (
            <BasicWeatherCard
              key={node.datetime}
              id={node.datetime}
              weatherNode={node}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  bgcolor: "white",
                  mt: 0.5,
                  boxShadow: 4,
                  borderRadius: 5,
                  p: 1,
                  fontSize: 14,
                }}
              >
                {node.temps.map((tempNode, index) => {
                  return (
                    <TempDisplay
                      key={`hourly-${index}`}
                      temperature={tempNode}
                      unit={unit}
                    />
                  );
                })}
                <Divider sx={{ mx: 0.5 }} orientation="vertical" />
                <HumidityDisplay
                  key={"current-humidity"}
                  humidity={node.humidity}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Box sx={{ fontSize: 14, m: 0.25 }}>
                  {new Date(node.datetime * 1000).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </Box>
                <Divider orientation="vertical" sx={{ mx: 0.5 }} flexItem />
                <Box sx={{ fontSize: 14, m: 0.25 }}>
                  {new Date(node.datetime * 1000).toLocaleDateString("en", {
                    month: "numeric",
                    day: "numeric",
                  })}
                </Box>
              </Box>
            </BasicWeatherCard>
          );
        })}
      </ScrollableWeatherDisplay>
    </>
  );
};

export default HourlyWeatherDisplay;
