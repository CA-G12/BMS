/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-nested-ternary */
import { Typography, Button, message } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InferServicesModel } from '../../../Interfaces/services';
import { Loading, NoData } from '../../index';

const { Title } = Typography;

const ServicesContainer: React.FC = () => {
  const [service, setService] = useState<Array<InferServicesModel>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const columns: ColumnsType<InferServicesModel> = [
    {
      title: 'اسم الخدمة',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <h3 style={{ color: 'rgb(21 111 193)' }}>{text}</h3>,
    },
    {
      title: 'السعر ثابت/متغير',
      dataIndex: 'is_fixed',
      key: 'is_fixed',
      render: (text) => <p>{text ? 'ثابت' : 'متغير'}</p>,
    },
    {
      title: 'وصف الخدمة',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'السعر',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'تعديل',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => (
        <Link to={`/admin/services/editService/${record.id}`}>
          <EditOutlined />
        </Link>
      ),
    },
    {
      title: 'تفعيل / الغاء التفعيل',
      dataIndex: 'is_open',
      key: 'is_open',
      render: (text, record) => (
        <Button
          onClick={() => {
            // console.log('record: ', record);
            axios.put(`/api/v1/services/${record.id}`, {
              id: record.id, name: record.name, isOpen: !record.is_open, isFixed: record.is_fixed, description: record.description, price: record.price,
            }).then(() => {
              if (service.length) {
                setService((prev) => prev.map((ele) => {
                  if (ele.id === record.id) return { ...record, is_open: !record.is_open };
                  return ele;
                }));
              }
            }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
          }}
          type="primary"
        >
          {text ? 'الغاء التفعيل' : 'تفعيل'}
        </Button>
      ),
    },
  ];
  // const [isTrue, setIsTrue] = useState<boolean>(true);
  const fetchData = (signal : AbortSignal) => {
    axios.get('/api/v1/services/', { signal })

      .then(({ data: { data } }) => {
        // console.log('data: ', data);
        setService(data as Array<InferServicesModel>);
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
    <>
      <div className="headerOfServices">
        <Title className="titleAdmin">الخدمات</Title>
        <Link to="/admin/services/addService">

          <Button type="primary">
            {' '}
            <PlusCircleOutlined />
            اضافة خدمة
          </Button>
        </Link>
      </div>
      {
        (loading) ? <Loading /> : ((service.length > 0) ? (
          <Table
            pagination={{ defaultPageSize: 6 }}
            columns={columns}
            dataSource={service}
          />
        ) : <NoData />)
      }
    </>
  );
};
export default ServicesContainer;
