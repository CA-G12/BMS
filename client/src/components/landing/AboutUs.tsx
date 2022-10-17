/* eslint-disable max-len */
import { Layout, Typography } from 'antd';
import React from 'react';
import { Title } from './index';

const { Paragraph } = Typography;

const { Content } = Layout;

const App: React.FC = () => (
  <Layout style={{ backgroundColor: '#FFFFFF' }}>
    <Title>تعرف عليينا</Title>
    <Content
      style={{
        padding: '16px 100px', display: 'flex', gap: 100, width: 1500,
      }}
    >
      <Paragraph
        style={{
          width: 700,
          paddingRight: 150,
          float: 'right',
          paddingTop: 16,
          fontSize: 'large',
          lineBreak: 'normal',
        }}
      >
        سلسلة أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009 سلسلة
        أبراج الحساينة هوم , هو سلسلة من المباني تأسست عام 2009 سلسلة أبراج
        الحساينة هوم , هو سلسلة من المباني تأسست عام 2009 سلسلة أبراج الحساينة
        هوم , هو سلسلة من المباني تأسست عام 2009 سلسلة أبراج الحساينة هوم , هو
        سلسلة من المباني تأسست عام 2009 سلسلة أبراج الحساينة هوم , هو سلسلة من
        المباني تأسست عام 2009
      </Paragraph>
      <img
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        alt="building"
        style={{ width: 600, height: 300, borderRadius: 50 }}
      />
    </Content>
  </Layout>
);
export default App;
