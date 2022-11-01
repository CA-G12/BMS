import { DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  Dropdown,
  Menu,
  Select, Space, Table, Typography,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface UserAnns {
  id: number;
  title: string;
  isPublic: boolean;
  startDate: string;
  endDate: string;
}

interface CreateAnns {
  title: string;
  discription: string;
  isPublic: boolean;
  startDate: string;
  endDate: string;
}

const GetAnns = () => new Promise<AnnResponse>((resolve, reject) => {
  axios.get('/api/v1/announcements')
    .then(resolve)
    .catch(reject);
});
const AddAnnd = (values: CreateAnns) => new Promise((resolve, reject) => {
  axios.post('/api/v1/announcements', values)
    .then(resolve)
    .catch(reject);
});

const menu = (
  <Menu
    items={[
      {
        label: (
          <Link to="new/internal">
            إعلان خاص
          </Link>
        ),
        key: '0',
      },
      {
        label: (
          <Link to="new/external">
            إعلان عام
          </Link>
        ),
        key: '1',
      },
      {
        type: 'divider',
      },
    ]}
  />
);

const columns: ColumnsType<UserAnns> = [
  {
    title: 'الإعلان',
    dataIndex: 'title',
    key: 'id',
    render: (value) => (
      <p style={{
        width: '200px',
      }}
      >
        {value}
      </p>
    ),
  },
  {
    title: 'الحالة',
    dataIndex: 'isPublic',
    key: 'id',
    render: (_, { isPublic }) => {
      if (isPublic) return 'عام';
      return 'خاص';
    },
  },
  {
    title: 'تاريخ البدء',
    dataIndex: 'startDate',
    key: 'id',
  },
  {
    title: 'تاريخ الانتهاء',
    dataIndex: 'endDate',
    key: 'id',
  },
  {
    title: 'تعديل',
    key: 'edit',
    render: (_, { id }) => (
      <EditOutlined style={{ cursor: 'pointer' }} />
    ),
  },
  {
    title: 'حذف',
    key: 'delete',
    render: (_, { id }) => (
      <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
    ),
  },
];

const App: React.FC = () => {
  const [advs, setAnns] = useState<UserAnns[]>([]);

  useEffect(() => {
    GetAnns()
      .then(({ data }) => {
        setAnns(data.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Title style={{
          fontSize: 'large',
          padding: '16px',
          color: '#1890ff',
        }}
        >
          الإعلانات
        </Title>
        <Dropdown overlay={menu}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <Button>
              إعلان جديد
              <DownOutlined />
            </Button>
          </a>
        </Dropdown>
      </div>
      {' '}
      <Table columns={columns} dataSource={advs} />
    </>
  );
};

export default App;

interface AnnResponse {
  data: AnnResult;
}
interface AnnResult {
  data: UserAnns[];
}
