/* eslint-disable import/no-cycle */
import {
  Layout, Typography, Col, Row,
} from 'antd';
import React from 'react';
import { Title } from '../index';
import AboutImg from '../../assets/images/about.jpg';
import './style.css';

const { Paragraph } = Typography;

const AboutUs: React.FC = () => (
  <Layout id="about-us">
    <Title>تعرف علينا</Title>
    <Row>
      <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
        <Paragraph>
          سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
          وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
          سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
          وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
          سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
          سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
          وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
          سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
        </Paragraph>
      </Col>

      <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
        <img
          src={AboutImg as string}
          alt="building"
          className="img-about"
        />
      </Col>
    </Row>
  </Layout>
);
export default AboutUs;
