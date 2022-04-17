import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import { router } from './routes/Login.routers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.use(router);

export { app };
