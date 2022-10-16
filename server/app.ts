import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import morgan from 'morgan';
import { clientError, serverError } from './middleware';
import {
  Announcement, Advertisement, BillModel, FlatModel, ServiceModel,
} from './models';


dotenv.config();

const {
  env: { PORT, NODE_ENV },
} = process;

const app = express();
app.set('port', PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use('/api/v1', router);

app.get('/announcements', async (req, res) => {
  const data = await Announcement.findAll();
  res.json({ message: 'Announcements', data });
});

app.get('/advertisements', async (req, res) => {
  const data = await Advertisement.findAll();
  res.json({ message: 'Advertisements', data });
});

app.get('/bill', async (req, res) => {
  const data = await BillModel.findAll();
  res.json({
    message: 'Bill',
    data,
  });
});

app.get('/flat', async (req, res) => {
  const data = await FlatModel.findAll();
  res.json({ message: 'Flat', data });
});

app.get('/service', async (req, res) => {
  const data = await ServiceModel.findAll();
  res.json({ message: 'Service', data });
});

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.use(clientError);
app.use(serverError);

export default app;
