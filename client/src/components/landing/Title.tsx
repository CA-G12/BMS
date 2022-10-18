import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;
const TitleComp: React.FC<any> = ({ children }) => (
  <Title
    style={{
      fontSize: 'x-large',
      padding: '16px',
      textAlign: 'center',
      color: '#475E6B',
      fontWeight: 'bolder',
    }}
  >
    {children}
  </Title>
);
export default TitleComp;
