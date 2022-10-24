import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import AppHeader from '../layouts/LandingPage/header';
import AppHome from '../components/home/Hero';
import AppFooter from '../layouts/LandingPage/footer';
import {
  AboutUs, AdsContainer, ContactUs, Services, VideoSection, FlatContainer,
} from '../components';

const { Header, Content, Footer } = Layout;

const LandingPage: React.FC = () => (
  <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppHome />
      <AboutUs />
      <AdsContainer />
      <FlatContainer />
      <Services />
      <VideoSection />
      <ContactUs />
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Layout>
);

export default LandingPage;
