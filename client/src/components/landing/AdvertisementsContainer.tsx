/* eslint-disable max-len */
import { Row } from 'antd';
import React from 'react';
import AdvertisementCard from './AdvertisementCard';

type AdsType = {
  id: number;
  img: string;
  title: string;
  des: string;
};

const ads: AdsType[] = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'شقة متاحة',
    des: `' متاح لدينا شقة فارغة بمساحة 140 متر  مربع تحتوي على 3 غرف نوم 
    ومطبخ على الطابق الرابع للمزيد من المعلومات يرجى التواصل'`,
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/6197123/pexels-photo-6197123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'مطلوب عامل نظافة',
    des: 'البرج بحاجة الى عامل نظافة براتب 800 شيكل شهريا ',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/5417293/pexels-photo-5417293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'شقة متاحة',
    des: `'متاح لدينا شقة فارغة بمساحة 190 متر  مربع تحتوي على 
    3 غرف نوم ومطبخ على الطابق الخامس للمزيد من المعلومات يرجى التواصل'`,
  },
];

const App: React.FC = () => (
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
        {ads.map((ad) => (
          <AdvertisementCard info={ad} />
        ))}
      </Row>
    </div>
  </div>
);

export default App;
