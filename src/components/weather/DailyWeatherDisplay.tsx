import { Box, Divider } from "@mui/material";
import TempDisplay from "./TempDisplay";
import ScrollableWeatherDisplay from "./ScrollableWeatherDisplay";
import BasicWeatherCard from "./BasicWeatherCard";
import HumidityDisplay from "./HumidityDisplay";
import { WeatherNode } from "../../Types";

interface Props {
  dailyWeatherData: any;
  unit: string;
}

const DailyWeatherDisplay = ({ dailyWeatherData, unit }: Props) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <ScrollableWeatherDisplay key="daily-weather-scroller">
        {dailyWeatherData.map((node: WeatherNode, index: number) => {
          return (
            <BasicWeatherCard
              key={`daily-${index}`}
              id={node.datetime}
              weatherNode={node}
              size={2}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "white",
                  mt: 0.5,
                  boxShadow: 4,
                  borderRadius: 5,
                  p: 1,
                  fontSize: 14,
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {node.temps.map((tempNode, index) => {
                    return (
                      <>
                        <TempDisplay
                          key={`daily-${index}`}
                          temperature={tempNode}
                          unit={unit}
                        />

                        {index !== node.temps.length - 1 && (
                          <Divider sx={{ mx: 1 }} orientation="vertical" />
                        )}
                      </>
                    );
                  })}
                </Box>
                <Divider sx={{ my: 0.5 }} flexItem />
                <HumidityDisplay
                  key={`daily-humidity-${node.datetime}`}
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
                  {dayNames[new Date(node.datetime * 1000).getDay()]}
                </Box>
                <Divider orientation="vertical" flexItem />
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

export default DailyWeatherDisplay;
