import React from 'react';
import {
  AboutUs, AdsContainer, VideoSection, FlatContainer, Services, ContactUs,
} from '../components/landing';

const LandingPage: React.FC = () => (
  <>
    <AboutUs />
    <AdsContainer />
    <Services />
    <FlatContainer />
    <VideoSection />
    <ContactUs />
  </>
);

export default LandingPage;
