import {
  Typography,
} from 'antd';

import { Outlet } from 'react-router-dom';

const { Title } = Typography;

const Complaints: React.FC = () => (
  <>
    <div className="headerOfServices">
      <Title className="titleAdmin">الشكاوي</Title>
    </div>

    <Outlet />
  </>
);
export default Complaints;
