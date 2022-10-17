/* eslint-disable max-len */
import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdvertisementCard from './AdvertisementCard';

type AdsType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const App: React.FC = () => {
  const [Advertisement, setAvertisement] = useState<Array<AdsType> | null>([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get('api/v1/advertisements/');
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();
        console.log(data);
        setAvertisement(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(Advertisement);

  return (
    <div style={{ backgroundColor: '#F6F8FA', paddingBottom: 30 }}>
      <h1
        style={{
          fontSize: 'x-large',
          padding: '16px',
          textAlign: 'center',
          color: '#475E6B',
          fontWeight: 'bolder',
        }}
      >
        الإعلانات
      </h1>
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

export default App;
