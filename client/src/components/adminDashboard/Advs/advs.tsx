import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import {
  Button,
  notification,
  Table, Typography,
  Image,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface UserAdvs {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  image: string;
}

const GetAnns = (signal: AbortSignal) => new Promise<AnnResponse>((resolve, reject) => {
  axios.get('/api/v1/advertisements', { signal })
    .then(resolve)
    .catch(reject);
});

type NotificationType = 'success' | 'error';
const openNotificationWithIcon = (type: NotificationType, message: string, description: string) => {
  notification[type]({
    message,
    description,
  });
};

const columns: ColumnsType<UserAdvs> = [
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
    title: 'الصورة',
    dataIndex: 'image',
    key: 'id',
    render: (_, { image }) => (
      <Image
        width={100}
        src={image}
        preview={{
          src: image,
        }}
      />
    ),
  },
  {
    title: 'تاريخ البدء',
    dataIndex: 'start_date',
    key: 'id',
  },
  {
    title: 'تاريخ الانتهاء',
    dataIndex: 'end_date',
    key: 'id',
  },
  {
    title: 'تعديل',
    key: 'edit',
    render: (_, { id }) => (
      <Link to={`edit/${id}`}>
        <EditOutlined style={{ cursor: 'pointer' }} />
      </Link>
    ),
  },
  {
    title: 'حذف',
    key: 'delete',
    render: (_, { id }) => {
      const handleDelete = () => {
        axios.delete(`/api/v1/advertisements/${id}`)
          .then(() => openNotificationWithIcon('success', 'تم', 'تم حذف الاعلان'))
          .catch(() => openNotificationWithIcon('error', 'خطأ', 'حدث خطأ ما'));
      };
      return <DeleteOutlined onClick={handleDelete} style={{ color: 'red', cursor: 'pointer' }} />;
    },
  },
];

const App: React.FC = () => {
  const [advs, setAnns] = useState<UserAdvs[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    GetAnns(signal)
      .then(({ data }) => {
        setAnns(data.data);
      })
      .catch(() => openNotificationWithIcon('error', 'خطأ', 'حدث خطأ ما'));
  }, []);

  return (
    <>
      <div className="headerOfServices">
        <Title className="titleAdmin">الإعلانات</Title>
        <Link to="new">
          <Button type="primary" style={{ fontSize: '18px', height: '40px' }}>
            <PlusCircleOutlined />
            اضافة إعلان
          </Button>
        </Link>
      </div>
      {' '}
      <Table columns={columns} dataSource={advs} pagination={{ defaultPageSize: 3 }} />
    </>
  );
};

export default App;

interface AnnResponse {
  data: AnnResult;
}
interface AnnResult {
  data: UserAdvs[];
}
