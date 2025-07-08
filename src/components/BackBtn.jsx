import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
export default function BackBtn() {
  const CustomButton = styled(Button)({
    backgroundColor: "#E5E7EB",
    color: "black",
    fontSize: "16px",
    textTransform: "none",
    boxShadow: "none ",
  });
  return (
    <div className="ml-[15%] ">
      <Link to="/">
        <CustomButton variant="contained">
          {" "}
          <svg
            className="w-[13px] mr-[8px] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#292929"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
          Back
        </CustomButton>
      </Link>
    </div>
  );
}
