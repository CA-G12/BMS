// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuList from '../components/adminDashboard/menuList';
import Navbar from '../components/adminDashboard/navbar';

const { Content } = Layout;

const AdminDashboard: React.FC = () => (
  <div>
    <Navbar />
    <Layout>
      <Layout>
        <MenuList />
        <Content
          style={{
            padding: 24,
            margin: 0,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default AdminDashboard;
