import React from "react";
import Box from "../Box/Box";

import { BoardProps } from "../../assets/types";

import classes from "./Board.module.css";

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  const insertedBoard = board.map((singleBoard, index) => {
    return (
      <Box key={index} index={index} value={singleBoard} onClick={onClick} />
    );
  });

  return <div className={classes.board}>{insertedBoard}</div>;
};

export default Board;
