import { join } from 'path';
import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import router from './routes';

const app = express();
const {
  env: { PORT, NODE_ENV },
} = process;
dotenv.config();
app.set('port' , PORT||5000)



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());


console.log('dev');



export default app;