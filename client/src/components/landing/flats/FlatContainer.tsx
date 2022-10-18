import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NoData from '../NoData';
import FlatCard from './FlatCard';

type FreeFlatType = {
  id: number,
  area:number,
  notes: string
};
const FlatContainer: React.FC = () => {
  const [flats, setFlats] = useState<Array<FreeFlatType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/flats/', { signal })
      .then(({ data: { data } }) => {
        setFlats(data as Array<FreeFlatType>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);
  return (

    <div className="flatContainerComponent">
      <h2>شقق متاحة</h2>
      <p>هنالك شقق متوفرة بمساحات مختلفة</p>
      <div className="flatContainer">
        {(flats.length !== 0) ? (flats.map((flatCard) => (<FlatCard key={flatCard.id} info={flatCard} />))) : (<NoData />)}
      </div>
    </div>
  );
};

export default FlatContainer;
