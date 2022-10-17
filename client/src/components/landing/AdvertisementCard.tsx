import { Card, Col, Button } from 'antd';
import React from 'react';

const { Meta } = Card;
type AdsType = {
  id:number;
  img: string;
  title: string;
  des: string;
};
  type AdProps = { info:AdsType };
const App: React.FC<AdProps> = ({ info }) => (
// export default function App({ info } : AdProps) {
//   return (
  <Col span={8}>
    <Card
      style={{ width: 300, height: 400 }}
      cover={(
        <img
          style={{ height: 200 }}
          alt="Advertisement"
          src={info.img}
        />
          )}
      actions={[
        <Button
          style={{
            backgroundColor: '#475E6B',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          انقر هنا
        </Button>,
      ]}
    >
      <Meta
        style={{ height: 120 }}
        title={info.title}
        description={info.des}
      />
    </Card>
  </Col>
);
export default App;
