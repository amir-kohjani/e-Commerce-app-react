import { Alert, Snackbar } from "@mui/material";
import React from "react";

const CustomSnakbar = ({
  open,
  onClose,
  color = "success",
  message,
  vertical = "top",
  horizontal = "center",
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    //   TransitionComponent='SlidTransition'
    >
      <Alert severity={color} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnakbar;
