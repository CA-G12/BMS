import { Card, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import React from 'react';

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
    cover={<img alt="example" src="https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
  >
    <div className="iconsAndArea">
      <p className="area">{`$ ${info.area}`}</p>
      <div className="icons">
        <i className="ri-chat-1-fill" />
        <PhoneOutlined />
        <i className="ri-hand-heart-line" />
      </div>
    </div>
    <p className="firstP">{info.notes}</p>
    <p className="secondeP">بعض التفاصيل</p>
    <div className="details">
      <div className="oneDetail">
        <p>300</p>
        <i className="ri-hotel-bed-fill" />
      </div>
      <div className="oneDetail">
        <p>نوم</p>
        <i className="ri-hotel-bed-fill" />
      </div>
      <div className="oneDetail">
        <p>نوم</p>
        <i className="ri-hotel-bed-fill" />
      </div>
      <div className="oneDetail">
        <p>نوم</p>
        <i className="ri-hotel-bed-fill" />
      </div>
    </div>
    <Button className="btn" type="primary">انقر هنا</Button>
  </Card>
);

export default FlatCard;
