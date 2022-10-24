import { Col, Row } from 'antd';
import React from 'react';
import logoImg from '../../assets/images/logo.png';

const AppFooter: React.FC = () => (
  <div>
    <Row>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <div>
          <div className="logo">
            <img src={logoImg as string} alt="logo" />
          </div>
          <p className="para-footer">
            سلسلة من المباني تأسست عام 2009 وتوفر سلسلة الحساينة هوم عقارات سكنية متنوعة
          </p>
          <div className="social-media">
            <span className="icon"><i className="ri-instagram-line" /></span>
            <span className="icon"><i className="ri-facebook-circle-line" /></span>
            <span className="icon"><i className="ri-twitter-line" /></span>
            <span className="icon"><i className="ri-whatsapp-line" /></span>
          </div>
        </div>
      </Col>

      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <h1 className="title">المساعدة</h1>
        <div className="links">
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
        </div>
      </Col>

      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <h1 className="title">التواصل</h1>
        <div className="links">
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
        </div>
      </Col>

      <Col xs={{ span: 24, offset: 0 }} md={{ span: 6, offset: 1 }} lg={{ span: 4, offset: 2 }}>
        <h1 className="title">الخدمات</h1>
        <div className="links">
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
          <a className="anchorLink" href="/">
            صفحة 1
          </a>
        </div>
      </Col>

    </Row>
  </div>
);

export default AppFooter;
