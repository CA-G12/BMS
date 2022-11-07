import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import BasicCards from './basicCards';
import Userscharts, { UserBillsProps } from './Userscharts';
import ComplaintsCharts from './ComplaintsCharts';
import AddsChart from './addsChart';

const App = () => {
  const [usersCount, setUsersCount] = useState<number>(0);
  const [messagesCount, setMessagesCount] = useState<number>(0);
  const [advertisementsCount, setAdvertisementsCount] = useState<number>(0);
  const [announcementsCount, setAnnouncementsCount] = useState<number>(0);
  const [complaintsCount, setComplaintsCount] = useState<number>(0);
  const [userBillsState, setUserBills] = useState<any[]>([]);
  useEffect(() => {
    axios.get('/api/v1/statistics/admin')
      .then(({ data }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
          users,
          advertisements,
          announcements,
          complaints,
          messages,
          usersBills,
        } = data;

        setUsersCount(users as number);
        setMessagesCount(messages as number);
        setAdvertisementsCount(advertisements as number);
        setAnnouncementsCount(announcements as number);
        setComplaintsCount(complaints as number);
        setUserBills(usersBills as any[]);
        console.log(usersBills);
      })
      .catch(console.log);
  }, []);
  return (
    <>
      <BasicCards
        advertisements={advertisementsCount}
        messages={messagesCount}
        announcements={announcementsCount}
        complaints={complaintsCount}
        users={usersCount}
      />
      <Row gutter={16}>
        <Col span={4} />
        <Col span={16}>
          <Card>
            <Userscharts usersBills={userBillsState} />
          </Card>
        </Col>
        <Col span={4} />
        {/* <Col span={8}>
          <Card>
            <ComplaintsCharts />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <AddsChart />
          </Card>
        </Col> */}
      </Row>
    </>
  );
};
export default App;
