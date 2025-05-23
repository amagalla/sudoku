import { Response, Request, NextFunction } from 'express';
import { HttpError } from '../../utils/http-error';
import { defaultBoard } from '../../utils/defaultBoard';

const validInputs = (req: Request, resp: Response, next: NextFunction) => {
    const { row, col, value } = req.body;

    if (typeof row !== 'number' || typeof col !== 'number' || typeof value !== 'number') {
        return next(new HttpError('Row, Column, and Value must be numbers', 400));
    }
    
    if (row < 0 || row > 8 || col < 0 || col > 8) {
        return next(new HttpError('Row or Column must be between 0 and 8', 400));
    }

    if (value < 1 || value > 9) {
        return next(new HttpError('Value must be between 1 and 9', 400));
    }

    if (defaultBoard[row][col] !== null) {
        return next(new HttpError('Cannot change original cells', 400));
    }

    next();
}

export default validInputs;