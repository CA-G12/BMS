import {
  Button, Form, Input, ConfigProvider, Layout,
} from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import React from 'react';
import { Title } from './index';

const { Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const { Content } = Layout;

const ContactUs: React.FC = () => {
  const onFinish = (values: object) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
  // eslint-disable-next-line max-len
    <Layout style={{ backgroundColor: '#fff', margin: '0 115px' }}>
      <Title>تواصل معنا</Title>
      <Content
        style={{
          padding: '16px 100px',
        }}
      >
        <div className="services">
          <Form {...layout} name="nest-messages" onFinish={onFinish}>
            <Item name={['user', 'name']} label="الاسم" rules={[{ required: true }]}>
              <Input />
            </Item>
            <Item name={['user', 'email']} label="الايميل" rules={[{ type: 'email' }]}>
              <Input />
            </Item>
            <Item name={['user', 'phone']} label="رقم الجوال" rules={[{ required: true }]}>
              <Input />
            </Item>
            <Item name={['user', 'address']} label="العنوان" rules={[{ required: true }]}>
              <Input />
            </Item>
            <Item name={['user', 'message']} label="الرسالة" rules={[{ required: true }]}>
              <Input.TextArea />
            </Item>
            <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                أرسل طلبك
              </Button>
            </Item>
          </Form>

          <div className="img img-contact">
            <img src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg" alt="contact" />
          </div>
        </div>
      </Content>

    </Layout>
  );
};

export default ContactUs;
