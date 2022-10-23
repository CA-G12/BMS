/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography, Button } from 'antd';

import Table, { ColumnsType } from 'antd/lib/table';
import React, { ReactElement } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import '../../App/style.css';

const { Title } = Typography;

interface DataType {
  key: string,
  name: string,
  static: string,
  details: string,
  price: number,
  edit: string,
  disable: ReactElement<any, any> | string,
}

const columns: ColumnsType<DataType> = [
  {
    title: 'اسم الخدمة',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'السعر ثابت/متغير',
    dataIndex: 'static',
    key: 'static',
  },
  {
    title: 'وصف الخدمة',
    dataIndex: 'details',
    key: 'details',
  },
  {
    title: 'السعر',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'تعديل',
    dataIndex: 'edit',
    key: 'edit',
  },
  {
    title: 'تفعيل / الغاء التفعيل',
    dataIndex: 'disable',
    key: 'disable',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'كهرباء',
    static: 'ثابت',
    details: 'كهربا لمدة 24 ساعة',
    price: 50,
    edit: 'تعديل',
    disable: <Button> الغاء التفعيل </Button>,
  },
  {
    key: '2',
    name: 'كهرباء',
    static: 'ثابت',
    details: 'كهربا لمدة 24 ساعة',
    price: 50,
    edit: 'تعديل',
    disable: <Button>تفعيل</Button>,
  },
  {
    key: '3',
    name: 'كهرباء',
    static: 'ثابت',
    details: 'كهربا لمدة 24 ساعة',
    price: 50,
    edit: 'تعديل',
    disable: <Button>تفعيل</Button>,
  },
];

const Services: React.FC = () => (
  <>
    <div className="headerOfServices">
      <Title className="titleAdmin">الخدمات</Title>
      <Button type="primary">
        {' '}
        <PlusCircleOutlined />
        اضافة خدمة
      </Button>
    </div>
    <Table columns={columns} dataSource={data} />
  </>
);

export default Services;
