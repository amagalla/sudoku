import { defaultBoard } from "../utils/defaultBoard";

export type Board = (number | null)[][];

export function generatePuzzle(): Board {
    return defaultBoard;
}