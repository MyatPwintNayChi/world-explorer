import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function CustomBtn(props) {
  const CustomButton = styled(Button)({
    backgroundColor: "#E5E7EB",
    color: "black",
    fontSize: "16px",
    textTransform: "none",
    boxShadow: "none ",
  });
  return (
    <div>
      <CustomButton variant="contained">{props.name}</CustomButton>
    </div>
  );
}
