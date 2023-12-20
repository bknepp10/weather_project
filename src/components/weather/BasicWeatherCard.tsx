import { Box } from "@mui/material";
import WeatherIcon from "./WeatherIcon";
import { ReactNode } from "react";
import { grey } from "@mui/material/colors";

//TODO maybe make icon expect the weather object since its constant

interface Props {
  id: number;
  size?: number;
  weatherNode: any;
  children?: ReactNode;
}

const BasicWeatherCard = ({ id, size = 1, weatherNode, children }: Props) => {
  const iconData = weatherNode.iconData;
  return (
    <>
      <Box
        key={id}
        id={`${id}`}
        sx={{
          m: 1,
          p: 2,
          width: `${size * 125}px`,
          height: `${size * 125}px`,
          bgcolor: grey[200],
          boxShadow: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <WeatherIcon
          key={`icon-${id}`}
          id={iconData.id}
          description={iconData.description}
          icon={iconData.icon}
          size={size}
        />
        {children}
      </Box>
    </>
  );
};

export default BasicWeatherCard;
