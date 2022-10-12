import React , {FC} from 'react';
import './style.css';
import { Button } from 'antd';
import { LeftSquareOutlined } from '@ant-design/icons';

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <h1>BMS</h1>
    </div>


  );
}
=======

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    < LeftSquareOutlined />
  </div>
);
>>>>>>> bd86d4452d0054db5e943ee373b10d136bf59a1a





export default App;
