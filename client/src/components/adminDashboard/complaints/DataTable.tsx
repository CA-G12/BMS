/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from 'react';
import {
  message, Button,
} from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';

import { LeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InferComplaintsModel } from '../../../Interfaces/complaints';
import { Loading, NoData } from '../../index';

const DataTable:FC = () => {
  const [complaint, setComplaint] = useState<Array<InferComplaintsModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleted, setDeleted] = useState<boolean>(false);

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
        <Link to={`show/${record.id}`}>
          <p>
            عرض الشكوى
            {' '}
            <LeftOutlined />
          </p>
        </Link>
      ),
    },
    {
      title: 'حالة الشكوى',
      dataIndex: 'deletedAt',
      key: 'deleteAt',
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => {
            axios({
              method: 'DELETE',
              url: `/api/v1/complaints/${record.id}`,
            })
              .then(() => {
                setDeleted(!deleted);
                if (complaint.length) {
                  setComplaint((prev) => prev.map((ele) => {
                    if (ele.id === record.id) return { ...record };
                    return ele;
                  }));
                }
              }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
          }}
        >
          {' '}
          تم المراجعة
        </Button>
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
  }, [deleted]);

  if (loading) return <Loading />;
  if (!complaint.length) return <NoData />;
  return (
    <Table
      pagination={{ defaultPageSize: 6 }}
      columns={columns}
      dataSource={complaint}
    />
  );
};

export default DataTable;
