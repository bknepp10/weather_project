import { Box } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { convertTempToUnit } from "../../utils";

interface Props {
  temperature: number;
  unit: string;
  children?: ReactNode;
}

const TempDisplay = ({ temperature, unit }: Props) => {
  const [convertedTemp, setConvertedTemp] = useState<number>();

  useEffect(() => {
    const temp = convertTempToUnit(temperature, unit);

    setConvertedTemp(temp);
  }, [temperature, unit]);

  return (
    <>
      <Box
        component="div"
        sx={{
          textAlign: "center",
          alignSelf: "center",
          w: 1,
          whiteSpace: "nowrap",
        }}
      >
        {convertedTemp} &deg; {unit}
      </Box>
    </>
  );
};

export default TempDisplay;
