import React from 'react';
import Layout from '../layouts/Landing Page/layout';
import {
  AboutUs, AdsContainer, VideoSection, FlatContainer, Services, ContactUs,
} from '../components/landing';

const LandingPage: React.FC = () => (
  <Layout>
    <AboutUs />
    <AdsContainer />
    <Services />
    <FlatContainer />
    <VideoSection />
    <ContactUs />
  </Layout>
);

export default LandingPage;
