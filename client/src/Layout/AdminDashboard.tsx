import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuList from '../components/adminDashboard/menuList';
import Navbar from '../components/adminDashboard/navbar';

const { Content } = Layout;

interface AdminDashboardProps {
  role: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ role }) => (
  <>
    <Navbar />
    <Layout>
      <Layout>
        <MenuList role={role} />
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

export default AdminDashboard;
