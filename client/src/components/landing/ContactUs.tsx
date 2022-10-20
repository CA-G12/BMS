import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Input, Layout, Image,
} from 'antd';
import './style.css';
import { Title } from './index';
import sendContactUs from '../../services/contactUsApi';
import { ContactUsModel } from '../../Models/contactUs';
import { BaseURL } from '../../Utilities/apiConsts';

const { Content } = Layout;
const { Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ContactUs: React.FC = () => {
  const onFinish = (values: object) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };
  const [userData, setUserData] = useState<ContactUsModel>({
    name: '', email: '', phoneNumber: '', subject: '', description: '',
  });
  const navigation = useNavigate();
  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    sendContactUs(userData)
      .then(() => navigation(BaseURL))
      .catch((err) => console.log(err));
  };

  return (
    <Layout style={{ backgroundColor: '#fff', margin: '0 115px' }}>
      <Title>تواصل معنا</Title>
      <Content
        style={{
          padding: '16px 100px',
        }}
      >
        <div className="services">
          <Form name="nest-messages" onFinish={onFinish}>
            <Item name="name" label="الاسم" rules={[{ required: true }]}>
              <Input
                placeholder="الاسم"
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                value={userData.name}
              />
            </Item>

            <Item
              name="email"
              label="البريد الإلكتروني"
              rules={[{ required: true, type: 'email', message: 'يرجى إدخال بريد إلكتروني صحيح' }]}
            >
              <Input
                placeholder="البريد الإلكتروني"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                value={userData.email}
              />
            </Item>

            <Item name="phone" label="رقم الجوال" rules={[{ required: true }]}>
              <Input
                type="tel"
                placeholder="رقم الجوال"
                onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                value={userData.phoneNumber}
              />
            </Item>

            <Item name="subject" label="الموضوع" rules={[{ required: true }]}>
              <Input
                placeholder="موضوع الرسالة"
                onChange={(e) => setUserData({ ...userData, subject: e.target.value })}
                value={userData.subject}
              />
            </Item>

            <Item name="description" label="الرسالة" rules={[{ required: true }]}>
              <Input.TextArea
                placeholder="أدخل رسالتك هنا"
                onChange={(e) => setUserData({ ...userData, description: e.target.value })}
                value={userData.description}
              />
            </Item>

            <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit" onSubmit={submitHandler}>
                أرسل طلبك
              </Button>
            </Item>
          </Form>

          <div className="img img-contact">
            <Image
              preview={false}
              src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg"
              alt="contact"
            />
          </div>
        </div>
      </Content>

    </Layout>
  );
};

export default ContactUs;
