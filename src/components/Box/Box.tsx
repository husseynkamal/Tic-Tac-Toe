import React from "react";

import { BoxProps } from "../../assets/types";

import classes from "./Box.module.css";

const Box: React.FC<BoxProps> = ({ value, index, onClick }) => {
  const boxColor = value === "X" ? classes.x : classes.o;

  return (
    <button
      type="button"
      className={`${classes.box} ${boxColor}`}
      onClick={onClick.bind(null, index)}
    >
      {value}
    </button>
  );
};

export default Box;
