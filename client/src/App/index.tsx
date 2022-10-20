import { FC } from 'react';
import './style.css';
import 'remixicon/fonts/remixicon.css';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import { AdminDashboard } from '../Layouts';
import { LandingPage } from '../pages';
import {
  Services, Bills, Flats,
} from '../components/adminDashboard';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/admin" element={<AdminDashboard />}>
      <Route index element={<h1>statistics</h1>} />
      <Route path="services" element={<Services />} />
      <Route path="flats" element={<Flats />} />
      <Route path="bills" element={<Bills />} />
    </Route>
    <Route path="*" element={<h1>page not found</h1>} />
  </Routes>
);

export default App;
