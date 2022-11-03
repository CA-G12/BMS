import React from 'react';

import { Layout } from 'antd';
import AppHeader from '../Layout/LandingPage/header';
import AppHome from '../components/Hero';
import AppFooter from '../Layout/LandingPage/footer';

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
