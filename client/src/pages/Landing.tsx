import React from 'react';
import {
  AboutUs, AdsContainer, Services, ContactUs,
} from '../components/landing';

const LandingPage: React.FC = () => (
  <>
    <AboutUs />
    <AdsContainer />
    <Services />
    <ContactUs />
  </>
);

export default LandingPage;
