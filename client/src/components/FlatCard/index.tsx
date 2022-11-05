/* eslint-disable react/prop-types */
import {
  Card, Button, Image, Typography, Row, Col,
} from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

const { Title } = Typography;

type FreeFlatType = {
  id: number,
  area:number,
  notes: string
};

type FlatCardProps = { info:FreeFlatType };

const FlatCard: React.FC<FlatCardProps> = ({ info }) => (
  <Row>
    <Col
      xs={{ span: 8, offset: 0 }}
      sm={{ span: 16, offset: 0 }}
      md={{ span: 24, offset: 0 }}
      lg={{ span: 32, offset: 0 }}
    >
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
    </Col>
  </Row>

);

export default FlatCard;
