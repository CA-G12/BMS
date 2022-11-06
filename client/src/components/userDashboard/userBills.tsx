/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-tabs */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-nested-ternary */
import {
  Typography, message, List, Select,
} from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InferBillUserModel } from '../../Interfaces/billUser';
import { Loading, NoData } from '../index';
import './style.css';

const { Title } = Typography;

const UserBills: React.FC = () => {
  const [userBill, setUserBill] = useState<Array<InferBillUserModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const handleChange = (value: string) => {
    if (value === 'جميع الشقق') {
      axios.get('/api/v1/billUser/?flat_number')
        .then(({ data: { data } }) => {
          setUserBill(data as Array<InferBillUserModel>);
          setLoading(false);
        }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
    } else {
      axios.get(`/api/v1/billUser/?flat_number=${value}`)
        .then(({ data: { data } }) => {
          setUserBill(data as Array<InferBillUserModel>);
          setLoading(false);
        }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
    }
  };
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
      render: (text: number) => <h3 style={{ color: 'rgb(21 111 193)' }}>{text}</h3>,
    },
    {
      title: 'السعر',
      dataIndex: 'Flats.Bills.total_price',
      key: 'Flats.Bills.total_price',
      render: (text: number) => <div>{`${text} شيكل`}</div>,
    },
    {
      title: 'حالة الفاتورة ',
      dataIndex: 'Flats.Bills.is_open',
      key: 'Flats.Bills.is_open',
      render: (value: string) => (
        <div>
          {!value ? 'مدفوع' : 'غير مدفوع'}
        </div>
      ),
    },
    {
      title: 'تاريخ الفتورة',
      dataIndex: 'Flats.Bills.createdAt',
      key: 'Flats.Bills.createdAt',
      render: (value: string) => (
        <div>
          {new Date(value).toLocaleDateString()}
        </div>
      ),
    },
    {
      title: 'الخدمات بأسعارها',
      dataIndex: 'Flats.Bills.services',
      key: 'Flats.Bills.services',
      render: (value) => (
        <List.Item>
          {(value).map((ele: { price: number; name: string; }) => (
            <List>
              <p style={{ display: 'inline-block', height: '5px' }}>
                {`✦	${ele.name}:`}
              </p>
              {` ${ele.price}`}
            </List>
          ))}
        </List.Item>
      ),
    },
  ];

  const getIds = () : string[] => {
    const ids: string[] = ['جميع الشقق'];
    userBill.forEach((element) => {
      if (!ids.includes(element['Flats.flat_number'])) {
        ids.push(element['Flats.flat_number']);
      }
    });
    return ids;
  };

  return (
    <>
      <div className="headerOfServices">
        <Title className="titleAdmin">الفواتير</Title>
        <Select
          defaultValue="جميع الشقق"
          style={{ width: 120 }}
          onChange={handleChange}
          options={
            getIds().map((ele :any) => ({
              lable: ele,
              value: ele,
            }))
          }
        />
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
// Some Steps to Filter Data by flat_number
// const option:any = () => (userBill).map((ele) => ele.Flats.flat_number);
// OR const option = () => (userBill:InferBillUserModel).map((ele) => ele.Flats.flat_number);
// options={option}
// we should return the data from option like this : value: 'is_open_false' label: 'مدفوع',
//  as a value and label , not as [{flat_number : 103}] ,
//  should be =[{value:'flat_number' , label : '103'}]
//  On click on of them should be filter as query string as the value or label in options , and the all data (not ?flat_number = 103) should be return as normal axios in fetch data
