import React , {FC} from 'react';
import './style.css';
import { Button } from 'antd';
import { LeftSquareOutlined } from '@ant-design/icons';


import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    < LeftSquareOutlined />
  </div>
);

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>BMS</h1>
//       <LeftSquareOutlined />
      
//     </div>
//   );
// }

