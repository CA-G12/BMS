import { Card, Col } from 'antd';
import React from 'react';

const { Meta } = Card;
type AdsType = {
  id:number;
  image: string;
  title: string;
  description: string;
};
  type AdProps = { info:AdsType };
const AdvertisementCard: React.FC<AdProps> = ({ info }) => (
  <Col span={8}>
    <Card
      style={{ width: 300, height: 400, borderRadius: 5 }}
      cover={(
        <img
          style={{ height: 200, borderRadius: '5px 5px 0px 0px' }}
          alt="Advertisement"
          src={info.image}
        />
          )}
    >
      <Meta
        style={{ height: 120 }}
        title={info.title}
        description={info.description}
      />
    </Card>
  </Col>
);
export default AdvertisementCard;
