export const convertTempToUnit = (temp: number, unit: string) => {
  let convertedTemp: number;
  switch (unit) {
    case "F":
      convertedTemp = (temp - 273.15) * 1.8 + 32;
      break;
    case "C":
      convertedTemp = temp - 273.15;
      break;
    default:
      convertedTemp = temp;
  }

  return Math.trunc(convertedTemp);
};
