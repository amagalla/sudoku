import { Router, Request, Response, NextFunction } from 'express';
import { HttpError } from '../../utils/http-error';
import { generatePuzzle } from '../../services/sudokuEngine';
import validInputs from '../../middleware/soduku.ts/moveValidation';
import { defaultBoard } from '../../utils/defaultBoard';
import isValid from '../../utils/isValid';

const router = Router();

let currentBoard = JSON.parse(JSON.stringify(defaultBoard));

router.get(
    '/generate',
    async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const board = generatePuzzle();

            resp.status(200).json({ board });
        } catch (err) {
            next(new HttpError('Error generating puzzle', 500));
        }
    }
)

router.post(
    '/move',
    validInputs,
    async (req: Request, resp: Response, next: NextFunction) => {
        const { row, col, value } = req.body;
        try {
            if (!isValid(currentBoard, row, col, value)) {
                return next(new HttpError('Invalid move', 400));
            }
            
            currentBoard[row][col] = value;

            resp.status(200).json({ result: currentBoard });
        } catch (err) {
            next(new HttpError('Error moving board', 500));
        }
    }
)

export default router;