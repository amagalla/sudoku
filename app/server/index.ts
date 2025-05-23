import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes';
import errorHandler from './middleware/error-handler';

dotenv.config();

const { PORT } = process.env || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

export default app;