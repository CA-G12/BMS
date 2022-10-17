/* eslint-disable max-len */
import { Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdvertisementCard from './AdvertisementCard';
import { Title } from './index';

type AdsType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const AdsContainer: React.FC = () => {
  const [Advertisement, setAvertisement] = useState<Array<AdsType> | null>([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get('api/v1/advertisements/');
      return data;
    } catch (err) {
      message.error('حدث خطأ ما');
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();
        setAvertisement(data.data);
      } catch (err) {
        message.error('حدث خطأ ما');
      }
    })();
  }, []);

  return (
    <div style={{ backgroundColor: '#F6F8FA', paddingBottom: 30 }}>
      <Title>الإعلانات </Title>

      <div
        className="site-card-wrapper"
        style={{ padding: '16px 200px', textAlign: 'center' }}
      >
        <Row gutter={16}>
          {Advertisement ? Advertisement.map((ad) => (
            <AdvertisementCard info={ad} />
          )) : <h1>noData</h1>}
        </Row>
      </div>
    </div>
  );
};

export default AdsContainer;
