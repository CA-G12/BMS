import React from 'react';
import Layout from '../layouts/Landing Page/layout';
import {
  AboutUs, AdsContainer, Services, ContactUs,
} from '../components/landing';

const LandingPage: React.FC = () => (
  <Layout>
    <AboutUs />
    <AdsContainer />
    <Services />
    <ContactUs />
  </Layout>
);

export default LandingPage;
