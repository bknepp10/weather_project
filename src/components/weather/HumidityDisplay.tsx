import { Box } from "@mui/material";

interface Props {
  humidity: number;
}

const HumidityDisplay = ({ humidity }: Props) => {
  return (
    <>
      <Box component="div" sx={{ whiteSpace: "nowrap", textAlign: "center" }}>
        Hum: {humidity} %
      </Box>
    </>
  );
};

export default HumidityDisplay;
