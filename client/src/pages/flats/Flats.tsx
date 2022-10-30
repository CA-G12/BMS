import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import {
  Button, Col, message, Row, Table,
} from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import Title from 'antd/lib/typography/Title';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IFlatsUsersResult } from '../../Interfaces/IFlatsUsersResult';
import getFlatsUsers from '../../services/flatsUsers';

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

const columns: ColumnsType<IFlatsUsersResult> = [
  {
    title: 'رقم الشقة',
    dataIndex: 'flat_number',
    sorter: true,
    width: '20%',

  },
  {
    title: 'اسم المستخدم',
    render: (_, record) => (
      <p>{record.full_name !== 'null null' ? record.full_name : 'شقة فارغة'}</p>
    ),
  },
  {
    title: 'رقم الجوال',
    dataIndex: 'phone_number',
  },
  {
    title: 'تعديل',
    dataIndex: 'id',
    key: 'id',
    render: (_, record) => (
      <Link to={`/admin/flats/${record.id}`}>
        <EditOutlined />
      </Link>
    ),
  },
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const Flats: React.FC = () => {
  const [data, setData] = useState<Array<IFlatsUsersResult>>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 2, // here to change the table size (total/limit)
    },
  });

  const fetchData = (signal: AbortSignal) => {
    setLoading(true);
    getFlatsUsers(qs.stringify(getRandomuserParams(tableParams)), signal)
      .then((res) => {
        const { total } = res.data;
        setData(res.data.result);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total,
          },
        });
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IFlatsUsersResult> | SorterResult<IFlatsUsersResult>[],
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <Title style={{
            fontSize: 'x-large',
            padding: '16px',
            color: '#3380FF',
            fontWeight: 'bolder',
          }}
          >
            الشقق

          </Title>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 1 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: '#3380FF', fontSize: '16px', height: '40px', marginTop: '15px', marginRight: '60px',
            }}
          >
            <PlusCircleOutlined style={{ fontSize: '16px' }} />
            <Link to="/admin/adduser" style={{ color: 'white', marginRight: '10px' }}>إضافة مستخدم</Link>

          </Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </>
  );
};

export default Flats;
