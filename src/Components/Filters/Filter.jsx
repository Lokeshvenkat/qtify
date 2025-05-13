import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Filters.module.css";

// Custom tab panel to render content conditionally based on active tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`filter-tabpanel-${index}`}
      aria-labelledby={`filter-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Filters component using MUI Tabs to switch between different filter categories
function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
  // Handles tab change
  const handleChange = (event, newIndex) => {
    setSelectedFilterIndex(newIndex);
  };

  // Accessibility props for tabs
  const a11yProps = (index) => ({
    id: `filter-tab-${index}`,
    "aria-controls": `filter-tabpanel-${index}`,
  });

  return (
    <div>
      {/* Tab header */}
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="Filter tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
      >
        {filters.map((filter, idx) => (
          <Tab
            key={idx}
            className={styles.tab}
            label={filter.label}
            {...a11yProps(idx)}
          />
        ))}
      </Tabs>

      {/* Corresponding tab content (optional, you can extend this to show actual content) */}
      {filters.map((filter, idx) => (
        <TabPanel key={idx} value={selectedFilterIndex} index={idx}>
          {/* You can put filter-specific content here if needed */}
        </TabPanel>
      ))}
    </div>
  );
}

export default Filters;
