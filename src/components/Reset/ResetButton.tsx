import React from "react";

import { Reset } from "../../assets/types";

import classes from "./ResetButton.module.css";

const ResetButton: React.FC<Reset> = ({ onReset }) => {
  return (
    <button type="button" className={classes["reset-btn"]} onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetButton;
