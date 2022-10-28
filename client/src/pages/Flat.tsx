import {
  Avatar, Col, Divider, Drawer, List, Row,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">
      {title}
      :
    </p>
    {content}
  </div>
);

const App: React.FC = () => (
  <>
    <Row>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
        <Title style={{
          fontSize: 'x-large',
          padding: '16px',
          color: '#3380FF',
          fontWeight: 'bolder',
        }}
        >
          معلومات عن الشقة

        </Title>

      </Col>

    </Row>
    <Row>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
        <p className="site-description-item-profile-p" style={{ fontSize: 'large', padding: '16px' }}>الشقة :</p>
      </Col>
    </Row>
    <Row>
      <Col lg={{ span: 12, offset: 2 }}>
        <p className="site-description-item-profile-p">الشقة رقم الشقة:</p>
      </Col>
    </Row>

    <Row>
      <Col span={12}>
        <DescriptionItem title="رقم الشقة" content="Lily" />
      </Col>
      <Col span={12}>
        <DescriptionItem title="المساحة" content="AntDesign@example.com" />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <DescriptionItem title="ملاحظات" content="HangZhou" />
      </Col>

    </Row>
    <Divider />
    <Row>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 12, offset: 1 }}>
        <p className="site-description-item-profile-p" style={{ fontSize: 'large', padding: '16px' }}>صاحب الشقة :</p>

      </Col>
    </Row>

    <Row>
      <Col span={12}>
        <DescriptionItem title="الاسم الأول" content="احمد" />
      </Col>
      <Col span={12}>
        <DescriptionItem title="اسم العائلة" content="محمد" />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <DescriptionItem title="رقم الهاتف" content="احمد" />
      </Col>
      <Col span={12}>
        <DescriptionItem title="الإيميل" content="محمد" />
      </Col>
    </Row>

  </>
);

export default App;
