/* eslint-disable react/no-array-index-key */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
import { ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.css';
import { Timeline, ConfigProvider, Layout } from 'antd';
import React from 'react';
import DataStatic from './DataStatic.json';
import { Title } from './index';

const { Content } = Layout;

const Services: React.FC = () => (
  <ConfigProvider direction="rtl">
    <Layout style={{ backgroundColor: '#fff', margin: '0 115px' }}>
      <Title>خدماتنا</Title>
      <Content
        style={{
          padding: '16px 100px',
        }}
      >
        <div className="services">
          <Timeline mode="right">
            {
              DataStatic.map((x, i) => <Timeline.Item key={i}>{x.content}</Timeline.Item>)
            }
          </Timeline>

          <div className="img">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="services" />
          </div>
        </div>
      </Content>

    </Layout>
  </ConfigProvider>
);

export default Services;
