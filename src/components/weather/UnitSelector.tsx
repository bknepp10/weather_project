import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  onChange: (event: SelectChangeEvent) => void;
  unitValue: string;
}

const UnitSelector = ({ onChange, unitValue }: Props) => {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="unit-select-label">Unit</InputLabel>
        <Select
          labelId="unit-select-label"
          id="weather-unit-select"
          value={unitValue}
          onChange={onChange}
          label="Unit"
        >
          <MenuItem value={"F"}>Fahrenheit</MenuItem>
          <MenuItem value={"C"}>Celcius</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default UnitSelector;
