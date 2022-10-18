import React from 'react';
import {
  AboutUs, AdsContainer, Title, VideoSection, FlatContainer,
} from '../components/landing';

const LandingPage: React.FC = () => (
  <>
    <AboutUs />
    <AdsContainer />
    <Title />
    <FlatContainer />
    <VideoSection />
  </>
);

export default LandingPage;
