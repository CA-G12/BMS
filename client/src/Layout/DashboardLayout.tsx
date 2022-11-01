import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuList from '../components/adminDashboard/menuList';
import Navbar from '../components/adminDashboard/navbar';

const { Content } = Layout;

interface DashboardLayoutProps {
  role: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ role }) => (
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

export default DashboardLayout;
