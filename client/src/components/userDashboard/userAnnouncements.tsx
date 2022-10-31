/* eslint-disable no-nested-ternary */
import { List, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { InferAnnouncementsModel } from '../../Interfaces/announcements';
import { Loading, NoData } from '../index';

const UserAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Array<InferAnnouncementsModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/announcements/', { signal })
      .then(({ data: { data } }) => {
        setAnnouncements(data as Array<InferAnnouncementsModel>);
        setLoading(false);
      })
      .catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  return (
    <>
      <div style={{
        color: '#3380FF', fontSize: '38px', fontWeight: '600', margin: '10px 15px',
      }}
      >
        الإعلانات الداخلية
      </div>
      {
        (loading) ? <Loading /> : ((announcements.length > 0) ? (
          <List
            size="large"
            dataSource={announcements}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<p>{item.title}</p>}
                  description={`من يوم ${item.start_date} الى يوم ${item.end_date}`}
                />
              </List.Item>
            )}
          />
        ) : <NoData />)
      }
    </>
  );
};

export default UserAnnouncements;
