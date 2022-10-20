import { FC } from 'react';
import { LandingPage } from '../pages';
import './style.css';
import 'remixicon/fonts/remixicon.css';

import 'antd/dist/antd.css';
import Login from '../pages/Auth/Login';

const App: FC = () => (
  <div className="App">
    <Login />
  </div>
);

export default App;
