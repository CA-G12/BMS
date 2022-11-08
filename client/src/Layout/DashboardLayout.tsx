import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuList from '../components/adminDashboard/menuList';
import Navbar from '../components/adminDashboard/navbar';
import FooterSection from '../components/adminDashboard/footer';

const { Content } = Layout;

const DashboardLayout: React.FC = () => (
  <>
    <Navbar />
    <Layout
      style={{
        position: 'relative',
        top: '78px',
      }}
    >
      <MenuList />
      <Content>
        <Outlet />
      </Content>
    </Layout>
    <FooterSection />
  </>
);

export default DashboardLayout;
