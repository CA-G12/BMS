import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import morgan from 'morgan';

// const morgan = require('morgan');

const app = express();

const {
  env: { PORT, NODE_ENV },
} = process;

dotenv.config();
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

// app.use('/api/v1', router);
app.set('port', PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());

app.use('/', (req, res) => {
  res.send('hello bms');
});

export default app;
