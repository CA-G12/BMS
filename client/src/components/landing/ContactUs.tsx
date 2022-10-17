/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable no-template-curly-in-string */
import {
  Button, Form, Input, InputNumber, ConfigProvider, Layout,
} from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import React from 'react';
import { Title } from './index';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const { Content } = Layout;

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ContactUs: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
  // eslint-disable-next-line max-len
    <ConfigProvider direction="rtl">
      <Layout style={{ backgroundColor: '#fff', margin: '0 115px' }}>
        <Title>تواصل معنا</Title>
        <Content
          style={{
            padding: '16px 100px',
          }}
        >
          <div className="services">
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Form.Item name={['user', 'name']} label="الاسم" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'email']} label="الايميل" rules={[{ type: 'email' }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'phone']} label="رقم الجوال" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'address']} label="العنوان" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'message']} label="الرسالة" rules={[{ required: true }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  أرسل طلبك
                </Button>
              </Form.Item>
            </Form>

            <div className="img img-contact">
              <img src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg" />
            </div>
          </div>
        </Content>

      </Layout>
    </ConfigProvider>
  );
};

export default ContactUs;
