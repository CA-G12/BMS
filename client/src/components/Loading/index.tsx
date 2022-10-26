import { Space, Spin } from 'antd';

const Loading: React.FC = () => (
  <Space size="middle" style={{ margin: '0px auto' }}>
    <Spin size="large" />
  </Space>
);

export default Loading;
