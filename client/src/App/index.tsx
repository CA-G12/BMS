import { FC, Fragment } from 'react';
import './style.css';
import { Button } from 'antd';
import { LeftSquareOutlined } from '@ant-design/icons';
import Layout from '../layouts/Landing Page/layout';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App: FC = () => (
  // <div className="App">
  //   <Button type="primary">Button</Button>
  //   <LeftSquareOutlined />
  // </div>
  <Layout Children={[
    <div>
      Child
    </div>,
  ]}
  />
);

export default App;
