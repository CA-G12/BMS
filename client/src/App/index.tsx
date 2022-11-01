/* eslint-disable import/no-cycle */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import './style.css';
import 'remixicon/fonts/remixicon.css';
import { AuthProvider } from '../context/AuthContext';

const App: FC = () => (
  <AuthProvider><Outlet /></AuthProvider>
);

export default App;
