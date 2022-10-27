// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuList from '../components/adminDashboard/menuList';
import Navbar from '../components/adminDashboard/navbar';

const { Content, Sider } = Layout;

const AdminDashboard: React.FC = () => (
  <Layout style={{ background: '#F0F8FF' }}>
    <Navbar />
    <Layout>
      <Sider style={{ background: '#fff' }} width={256} className="site-layout-background">
        <MenuList />
      </Sider>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default AdminDashboard;
