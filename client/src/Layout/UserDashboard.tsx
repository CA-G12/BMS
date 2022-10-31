// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuList from '../components/userDashboard/menuList';
import Navbar from '../components/adminDashboard/navbar';

const { Content } = Layout;

const UserDashboard: React.FC = () => (
  <>
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
  </>
);

export default UserDashboard;
