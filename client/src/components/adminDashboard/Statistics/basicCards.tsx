import {
  CommentOutlined,
  FireOutlined, MessageOutlined, ScheduleOutlined, SolutionOutlined, UserSwitchOutlined,
} from '@ant-design/icons';
import {
  Card, Col, Row, Statistic,
} from 'antd';
import { FC } from 'react';

interface BasicCardsProps {
  advertisements: number;
  announcements: number;
  complaints: number;
  users: number;
  messages: number;
}

const BasicCards: FC<BasicCardsProps> = (
  {
    advertisements,
    announcements,
    complaints,
    users,
    messages,
  },
) => (
  <>
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="المستخدمون" value={users} prefix={<UserSwitchOutlined />} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="الشكاوي" value={complaints} prefix={<FireOutlined />} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="الرسائل" value={messages} prefix={<MessageOutlined />} />
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="الاعلانات" value={advertisements} prefix={<ScheduleOutlined />} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="التعميمات" value={announcements} prefix={<SolutionOutlined />} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="التقييمات" value={1128} prefix={<CommentOutlined />} />
        </Card>
      </Col>
    </Row>

  </>
);

export default BasicCards;
