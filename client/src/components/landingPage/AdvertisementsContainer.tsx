/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import { Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdvertisementCard from './AdvertisementCard';
import { Title, Loading, NoData } from './index';

type AdsType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const AdsContainer: React.FC = () => {
  const [advertisements, setAdvertisements] = useState<Array<AdsType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = (signal: AbortSignal) => {
    axios.get('api/v1/advertisements/', { signal })
      .then(({ data: { data } }) => {
        setAdvertisements(data as Array<AdsType>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  return (
    <div style={{ backgroundColor: '#F6F8FA', paddingBottom: 30 }} id="ads">
      <Title>الإعلانات </Title>

      <div
        className="site-card-wrapper"
        style={{ padding: '16px 200px', textAlign: 'center' }}
      >
        <Row gutter={16}>
          {
          // eslint-disable-next-line no-nested-ternary
          (loading) ? <Loading /> : (advertisements.length > 0 ? advertisements.map((advertisement) => (
            <AdvertisementCard key={advertisement.id} info={advertisement} />
          )) : <NoData />)
}
        </Row>
      </div>
    </div>
  );
};

export default AdsContainer;
