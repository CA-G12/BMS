import { FC } from 'react';
import './style.css';
import { LandingPage } from '../pages';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Login from '../pages/Auth/Login';

const App: FC = () => (
  <div className="App">
    {/* <LandingPage /> */}
    <Login />
  </div>
);

export default App;
