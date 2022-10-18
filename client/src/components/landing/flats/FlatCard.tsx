import {
  Card, Button, Image, Typography,
} from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import React from 'react';

const { Title } = Typography;

type FreeFlatType = {
  id: number,
  area:number,
  notes: string
};

type FlatCardProps = { info:FreeFlatType };

const FlatCard: React.FC<FlatCardProps> = ({ info }) => (

  <Card
    className="flatCard"
    hoverable
    style={{ width: 342, height: 444 }}
    cover={<Image alt="free_flat" src="https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
  >
    <div className="iconsAndArea">
      <Title level={5} className="area">{`${info.area}م`}</Title>
      <div className="icons">
        <i className="ri-chat-1-fill" />
        <PhoneOutlined />
        <i className="ri-hand-heart-line" />
      </div>
    </div>
    <Title level={3} className="firstP">{info.notes}</Title>
    <Title level={5} className="secondeP">بعض التفاصيل</Title>
    <div className="details">
      <div className="oneDetail">
        <Title level={5}>300</Title>
        <i className="ri-hotel-bed-fill" />
      </div>
      <div className="oneDetail">
        <Title level={5}>نوم</Title>
        <i className="ri-hotel-bed-fill" />
      </div>
      <div className="oneDetail">
        <Title level={5}>نوم</Title>
        <i className="ri-hotel-bed-fill" />
      </div>
      <div className="oneDetail">
        <Title level={5}>نوم</Title>
        <i className="ri-hotel-bed-fill" />
      </div>
    </div>
    <Button className="btn" type="primary">انقر هنا</Button>
  </Card>
);

export default FlatCard;