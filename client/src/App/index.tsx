/* eslint-disable import/no-cycle */
import { FC } from 'react';
import './style.css';
import { LandingPage } from '../pages';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'remixicon/fonts/remixicon.css';

const App: FC = () => (
  <div className="App">
    <LandingPage />
  </div>
);

export default App;
