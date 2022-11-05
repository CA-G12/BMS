/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-nested-ternary */
import { Typography, message } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InferBillUserModel } from '../../Interfaces/billUser';
import { Loading, NoData } from '../index';

const { Title } = Typography;

const UserBills: React.FC = () => {
  const [userBill, setUserBill] = useState<Array<InferBillUserModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = (signal: AbortSignal) => {
    axios.get('/api/v1/billUser/', { signal })
      .then(({ data: { data } }) => {
        console.log('data: ', data);
        setUserBill(data as Array<InferBillUserModel>);
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

  const columns: ColumnsType<InferBillUserModel> = [
    {
      title: 'رقم الشقة',
      dataIndex: 'Flats.flat_number',
      key: 'Flats.flat_number',
      render: (text) => <h3 style={{ color: 'rgb(21 111 193)' }}>{text}</h3>,
    },
    {
      title: 'السعر',
      dataIndex: 'Flats.Bills.total_price',
      key: 'Flats.Bills.total_price',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'وصف الخدمة',
      dataIndex: 'Flats.Bills.is_open',
      key: 'Flats.Bills.is_open',
      render: (value) => (
        <div>
          {!value ? 'مدفوع' : 'غير مدفوع'}
        </div>
      ),
    },
    {
      title: 'السعر',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <>
      <div className="headerOfServices">
        <Title className="titleAdmin">الفواتير</Title>
      </div>
      {
        (loading) ? <Loading /> : ((userBill.length > 0) ? (
          <Table
            pagination={{ defaultPageSize: 6 }}
            columns={columns}
            dataSource={userBill}
          />
        ) : <NoData />)
      }
    </>
  );
};
export default UserBills;
