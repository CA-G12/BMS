import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import './style.css';
import 'remixicon/fonts/remixicon.css';

const App: FC = () => (
  <div><Outlet /></div>
);

export default App;
