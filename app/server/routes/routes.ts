import { Router } from 'express';
import sudoku from '../controllers/sudoku/sudoku';

const router = Router();

router.use('/sudoku', sudoku);

export default router;