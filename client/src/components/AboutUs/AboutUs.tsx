import {
  Layout, Typography, Col, Row,
} from 'antd';
import React from 'react';
import { Title } from '../index';
import './style.css';

const { Paragraph } = Typography;

const { Content } = Layout;

const AboutUs: React.FC = () => (
  <Layout style={{ backgroundColor: '#FFFFFF' }} id="about-us">
    <Title>تعرف علينا</Title>
    <Content style={{
      padding: '16px 56px',
    }}
    >
      <Row>
        <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
          <Paragraph>

            سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
            وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
            سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
            وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
            سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
            وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
            سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009
            وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة في مناطق سكنية و تجارية راقية جدا
          </Paragraph>
        </Col>

        <Col sm={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }}>
          <img
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="building"
            className="img-about"
          />
        </Col>
      </Row>
    </Content>
  </Layout>
);
export default AboutUs;
