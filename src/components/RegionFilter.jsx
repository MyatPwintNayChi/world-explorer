import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Form } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function RegionFilter({ onRegionChange }) {
  const [region, setRegion] = React.useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");

    setIsDarkMode(isDark);
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const selectedRegion = event.target.value;
    setRegion(selectedRegion);
    onRegionChange(selectedRegion);
  };

  const regions = ["Africa", "Asia", "Europe", "Americas", "Oceania"];
  const textColor = isDarkMode ? "#FFFFFF" : "#28233C";
  const placeholderColor = isDarkMode ? "#CCCCCC" : "#28233C";
  console.log(isDarkMode);

  return (
    <div className="w-[30%] mt-[30px] ml-[10%] mb-[50px] ">
      <FormControl
        className="w-[100%] "
        variant="standard"
        sx={{ m: 1, minWidth: "200px" }}
      >
        {/* <InputLabel
          id="demo-simple-select-standard-label"
          sx={{
            fontSize: "16px",
            fontFamily: "Segoe UI",

            "&.Mui-focused": {
              color: "#2e2e2e",
            },
          }}
        >
          Filter by Region
        </InputLabel> */}

        <Select
          displayEmpty
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={handleChange}
          label="Region"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <em style={{ color: placeholderColor }}>Filter by Region</em>
              );
            }
            return selected;
          }}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            "&:after": {
              borderBottom: "1px solid",
              borderBottomColor: isDarkMode ? "#ffffff" : "#0B1D51",
            },
            "&:before": {
              borderBottom: "1px solid",
              borderBottomColor: isDarkMode ? "#ffffff" : "#0B1D51", // Optional: default underline
            },
            "&:hover": {
              borderBottom: "1px solid",
              borderBottomColor: isDarkMode ? "#ffffff" : "#0B1D51", // Optional: default underline
            },

            color: textColor,
            "& .MuiSelect-icon": {
              color: isDarkMode ? "#ffffff" : "#28233C",
            },
          }}
        >
          <MenuItem sx={{ color: "#28233C" }} value="">
            <em>None</em>
          </MenuItem>
          {regions.map((region) => (
            <MenuItem sx={{ color: "#28233C" }} key={region} value={region}>
              {region}
            </MenuItem>
          ))}
          ;
        </Select>
      </FormControl>
    </div>
  );
}
