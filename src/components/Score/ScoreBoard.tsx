import React from "react";

import classes from "./ScoreBoard.module.css";

import { ScoreBoardProps } from "../../assets/types";

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, player }) => {
  const { xScore, oScore } = scores;

  return (
    <div className={classes.scoreboard}>
      <span
        className={`${classes.score} ${classes["x-score"]} ${
          !player && classes.inactive
        }`}
      >
        X - {xScore}
      </span>
      <span
        className={`${classes.score} ${classes["o-score"]} ${
          player && classes.inactive
        }`}
      >
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
