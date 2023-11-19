//** App Component **//

// board type
export type BoardState = string[];

// player type
export type TrueOrFalse = true | false;

// scores interface
export interface Scores {
  xScore: number;
  oScore: number;
}
/*************************************************************/

//** Board Component **//

export interface ClickHandler {
  onClick: (index: number) => void;
}

export interface BoardProps extends ClickHandler {
  board: string[];
}
/*************************************************************/

//** Box Component **//

export interface BoxProps extends ClickHandler {
  value: string;
  index: number;
}
/*************************************************************/

//** Score Component **//

export interface ScoreBoardProps {
  scores: Scores;
  player: TrueOrFalse;
}
/*************************************************************/

//** Rest Component **//

export type Reset = {
  onReset: () => void;
};
