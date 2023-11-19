import React, { Fragment, useEffect, useState } from "react";
import Board from "./components/Board/Board";
import ScoreBoard from "./components/Score/ScoreBoard";
import ResetButton from "./components/Reset/ResetButton";

import { WIN_CONDITIONS } from "./assets/win-conditions";
import { BoardState, Scores, TrueOrFalse } from "./assets/types";

import Swal from "sweetalert2";

const isString = (item: any) => typeof item === "string";

const App: React.FC = () => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [player, setPlayer] = useState<TrueOrFalse>(true);
  const [scores, setScores] = useState<Scores>({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState<TrueOrFalse>(false);

  const boardStatus = board.every((box) => isString(box));

  useEffect(() => {
    if (boardStatus) {
      Swal.fire("Draw!\nClick reset to start a new game.");
    }
  }, [boardStatus]);

  const incrementScores = (winner: string) => {
    if (winner === "X") {
      setScores((prevScores) => {
        return {
          ...prevScores,
          xScore: prevScores.xScore + 1,
        };
      });
    } else if (winner === "O") {
      setScores((prevScores) => {
        return {
          ...prevScores,
          oScore: prevScores.oScore + 1,
        };
      });
    }
  };

  const changePlayer = (winner: string | undefined) => {
    if (!winner) {
      setPlayer((prevPlayer) => !prevPlayer);
    }
  };

  const setBoxHandler = (index: number) => {
    if (gameOver || boardStatus) {
      Swal.fire("Game over!\nClick reset to start a new game.");
      setGameOver(true);
      return;
    }

    setBoard((prevBoard) => {
      type WinnerReturnType = ReturnType<typeof checkWinner>;
      let winner: WinnerReturnType;

      if (isString(prevBoard[index])) {
        return prevBoard;
      } else {
        if (!gameOver) {
          prevBoard[index] = player ? "X" : "O";

          winner = checkWinner(prevBoard);
          changePlayer(winner);
        }
      }

      if (winner) {
        Swal.fire(`${winner} is win!`);
        incrementScores(winner);
      }

      return prevBoard;
    });
  };

  const checkWinner = (board: BoardState) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoardHandler = () => {
    if (gameOver || board.indexOf("X") > -1) {
      setGameOver(false);
      setBoard(Array(9).fill(null));
      setPlayer(true);
    }
  };

  return (
    <Fragment>
      <ScoreBoard scores={scores} player={player} />
      <Board board={board} onClick={setBoxHandler} />
      <ResetButton onReset={resetBoardHandler} />
    </Fragment>
  );
};

export default App;
