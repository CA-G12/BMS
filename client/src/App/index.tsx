import { FC } from 'react';
import './style.css';
import 'remixicon/fonts/remixicon.css';
import 'antd/dist/antd.css';
import { Outlet } from 'react-router-dom';

const App: FC = () => (
  <div><Outlet /></div>
);

export default App;
