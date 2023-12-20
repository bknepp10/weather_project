import { Box } from "@mui/material";

interface Props {
  id: number;
  main?: string;
  description?: string;
  icon: string;
  size?: number;
}

const WeatherIcon = ({ id, icon, description, size = 1 }: Props) => {
  return (
    <>
      <Box
        key={id}
        component="div"
        sx={{
          mx: "auto",
          boxShadow: 4,
          bgcolor: "white",
          borderRadius: 4,
          mb: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${icon}${
            size > 1 ? `@${size}x` : ""
          }.png`}
          alt={description}
          loading="lazy"
        />
      </Box>
    </>
  );
};

export default WeatherIcon;
