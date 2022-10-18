import {
  Button, Form, Input, Layout, Image,
} from 'antd';
import './style.css';
import { Title } from './index';

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

  return (
    <Layout style={{ backgroundColor: '#fff', margin: '0 115px' }}>
      <Title>تواصل معنا</Title>
      <Content
        style={{
          padding: '16px 100px',
        }}
      >
        <div className="services">
          <Form {...layout} name="nest-messages" onFinish={onFinish}>
            <Item name="name" label="الاسم" rules={[{ required: true }]}>
              <Input placeholder="الاسم" />
            </Item>
            <Item
              name="email"
              label="البريد الإلكتروني"
              rules={[{ required: true, type: 'email', message: 'يرجى إدخال بريد إلكتروني صحيح' }]}
            >
              <Input placeholder="البريد الإلكتروني" />
            </Item>
            <Item name="phone" label="رقم الجوال" rules={[{ required: true }]}>
              <Input
                type="tel"
                placeholder="رقم الجوال"
              />
            </Item>
            <Item name="subject" label="الموضوع" rules={[{ required: true }]}>
              <Input placeholder="موضوع الرسالة" />
            </Item>
            <Item name="message" label="الرسالة" rules={[{ required: true }]}>
              <Input.TextArea placeholder="أدخل رسالتك هنا" />
            </Item>
            <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
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
