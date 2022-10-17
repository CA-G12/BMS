import { FC } from 'react';
import './style.css';
import 'remixicon/fonts/remixicon.css';

import 'antd/dist/antd.css';
import { FlatContainer, VideoSection } from '../components';

const App: FC = () => (
  <div className="App">
    <FlatContainer />
    <VideoSection />
  </div>
);

export default App;
