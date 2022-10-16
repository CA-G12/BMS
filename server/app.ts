import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import morgan from 'morgan';
import {
  Announcement, Advertisement,
  ComplaintsModel, ContactUsModel,
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

app.get('/complaints', async (req, res) => {
  const data = await ComplaintsModel.findAll();
  res.json({ message: 'Complaints', data });
});

app.get('/contactUs', async (req, res) => {
  const data = await ContactUsModel.findAll();
  res.json({ message: 'ContactUs', data });
});

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.set('port', PORT || 5000);

export default app;
