/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import './style.css';
import { LandingPage } from '../pages';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App: FC = () => (
  <div className="App">
    <LandingPage />
  </div>
);

export default App;
