import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import AppHeader from '../components/layout/header';
import AppHome from '../components/home/Hero';
// import AppFooter from './components/common/footer';
// import AppHome from './views/home';

const { Header, Content } = Layout;

const LandingPage: React.FC = () => (
  <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppHome />
    </Content>
  </Layout>
);

export default LandingPage;
// import React from 'react';
// import Layout from '../components/layout/layout';
// import {
//   AboutUs, AdsContainer, ContactUs, Services, VideoSection, FlatContainer,
// } from '../components';

// const LandingPage: React.FC = () => (
//   <Layout>
//     <AboutUs />
//     <AdsContainer />
//     <Services />
//     <FlatContainer />
//     <VideoSection />
//     <ContactUs />
//   </Layout>
// );

// export default LandingPage;
