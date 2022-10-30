/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-nested-ternary */
import { Typography, message, Button } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InferComplaintsModel } from '../../../Interfaces/complaints';
import { Loading, NoData } from '../../index';

const { Title } = Typography;

const Complaints: React.FC = () => {
  const [complaint, setComplaint] = useState<Array<InferComplaintsModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const columns: ColumnsType<InferComplaintsModel> = [
    {
      title: 'رقم الشقة',
      dataIndex: 'UserId',
      key: 'UserId',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'التاريخ',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'عنوان الشكوى',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'تفاصيل الشكوى',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'عرض الشكوى',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => (
        <Link to={`/admin/complaints/show/${record.id}`}>
          <p>
            عرض الشكوى
            {' '}
            <LeftOutlined />
          </p>
        </Link>
      ),
    },
  ];
  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/complaints/', { signal })

      .then(({ data: { data } }) => {
        setComplaint(data as Array<InferComplaintsModel>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ , أعد المحاولة'));
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
      <div className="headerOfServices">
        <Title className="titleAdmin">الشكاوي</Title>
      </div>
      {
        (loading) ? <Loading /> : ((complaint.length > 0) ? (
          <Table
            pagination={{ defaultPageSize: 6 }}
            columns={columns}
            dataSource={complaint}
          />
        ) : <NoData />)
      }
    </>
  );
};
export default Complaints;
