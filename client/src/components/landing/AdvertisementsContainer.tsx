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
  const [advertisement, setAdvertisement] = useState<Array<AdsType> | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchData = (signal: AbortSignal) => {
    axios.get('api/v1/advertisements/', { signal })
      .then(({ data: { data } }) => {
        setAdvertisement(data as Array<AdsType>);
      }).catch(() => message.error('حدث خطأ ما'));
  };
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    console.log(loading);

    return () => { controller.abort(); setLoading(false); };
  }, []);
  console.log('2', loading);

  return (
    <div style={{ backgroundColor: '#F6F8FA', paddingBottom: 30 }}>
      <Title>الإعلانات </Title>

      <div
        className="site-card-wrapper"
        style={{ padding: '16px 200px', textAlign: 'center' }}
      >
        <Row gutter={16}>
          {
          // eslint-disable-next-line no-nested-ternary
          (!loading) ? <Loading /> : (advertisement ? advertisement.map((ad) => (
            <AdvertisementCard key={ad.id} info={ad} />
          )) : <NoData />)
}
        </Row>
      </div>
    </div>
  );
};

export default AdsContainer;
