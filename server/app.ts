import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import morgan from 'morgan';
import {
  Announcement, Advertisement, Bills, Flats, Services,
} from './models';

dotenv.config();

const app = express();

const {
  env: { PORT, NODE_ENV },
} = process;

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

app.get('/bills', async (req, res) => {
  const data = await Bills.findAll();
  res.json({ message: 'Bills', data });
});

app.get('/flats', async (req, res) => {
  const data = await Flats.findAll();
  res.json({ message: 'Flats', data });
});

app.get('/services', async (req, res) => {
  const data = await Services.findAll();
  res.json({ message: 'Services', data });
});

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.set('port', PORT || 5000);

export default app;
