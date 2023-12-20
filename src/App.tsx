import GraphWidget from "./components/graph/GraphWidget";
import WeatherWidget from "./components/weather/WeatherWidget";
import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabSelect = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTab} onChange={handleTabSelect}>
          <Tab label="Weather" />
          <Tab label="Graph" />
        </Tabs>
      </Box>
      {selectedTab == 0 && <WeatherWidget />}
      {selectedTab == 1 && <GraphWidget />}
    </>
  );
};

export default App;
