import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';
import 'remixicon/fonts/remixicon.css';
import 'antd/dist/antd.css';
import Login from '../pages/Auth/Login';

const App: FC = () => (
  <div><Outlet /></div>
);

export default App;
