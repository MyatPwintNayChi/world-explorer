import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default function Searchbar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      onSearch(searchInput);
      console.log(searchInput);
    }
  };

  const CustomTextField = styled(TextField)(({ theme }) => ({
    "& label.Mui-focused": {
      color: "#210F37",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "",
        opacity: 0,
      },
    },
    "& input::placeholder": {
      color: "#210F37", // Change to any color you want
      opacity: 1,
    },

    "& input": {
      color: theme.palette.mode === "dark" ? "#fff" : "#210F37",
    },
  }));
  return (
    <div className="w-[100%] flex justify-center pt-[80px]  mb-[50px]">
      <div className="w-[80%]  py-[10px] px-[20px] rounded-[8px] flex items-center bg-gray-200">
        <svg
          className="mr-[8px]"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 512 512"
        >
          <path
            fill="#210F37"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        {/* <CustomTextField
        className="w-[80%] "
        id="outlined-search"
        label="Search for a country..."
        type="search"
      /> */}
        <form className="w-[100%]" onSubmit={handleSubmit}>
          <input
            className="bg-gray-200 w-[100%] outline-none p-[4px] w-[100%] text-[#28233C] placeholder-[#3D365C] placeholder-opacity-85 text-sm sm:text-base"
            type="text"
            id="search"
            placeholder="Search for a country..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            fullWidth
          />
        </form>
      </div>
    </div>
  );
}
