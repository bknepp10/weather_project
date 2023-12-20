import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ScrollableWeatherDisplay = ({ children }: Props) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          width: 1,
          scrollBehavior: "smooth",
        }}
      >
        <Box
          component="div"
          sx={{
            gap: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default ScrollableWeatherDisplay;
