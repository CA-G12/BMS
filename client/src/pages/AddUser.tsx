import { PlusCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Typography,
} from 'antd';

import { useNavigate } from 'react-router-dom';
import { IErrorSignupResult } from '../Interfaces/ISignupResult';
import { ISignupModel } from '../Interfaces/signup';
import createUser from '../services/createUser';

const { Title } = Typography;

const App: React.FC = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = (values: ISignupModel) => {
    createUser(values)
      .then((res) => {
        navigate('/admin/flats');
        return (message.success('تم إنشاء مستخدم جديد بنجاح'));
      })
      .catch((res: IErrorSignupResult) => {
        const msg: string = res.response.data.message === 'Phone Number Already Exist' ? 'رقم الهانف مستخدم حالبا' : 'حدث خطأ ما';
        return message.error(msg);
      });
  };

  return (
    <>
      <Title style={{
        fontSize: 'x-large',
        padding: '16px',
        color: '#3380FF',
        fontWeight: 'bolder',
      }}
      >
        إضافة مستخدم

      </Title>

      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Row>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }}>
            <Form.Item
              name="firstName"
              label="الاسم الأول"
              rules={[{ required: true, message: 'الرجاء ادخال اسمك الأول' }]}
              className="formItem"
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="lastName"
              label="اسم العائلة"
              rules={[
                {
                  required: true,
                  message: 'الرجاء ادخال اسم العائلة',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="phoneNumber"
              label="رقم الهاتف"
              rules={[{
                required: true,
                message: 'الرجاء ادخال رقم الهاتف',
              },
              {
                min: 7,
                message: 'رقم الهاتف يجب أن يكون أكبر من 7 ',
              },
              {
                max: 14,
                message: 'رقم الهاتف يجب أن يكون أقل من 14 ',
              }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 1 }}>
            <Form.Item
              className="formItem"
              name="email"
              label="البريد الإلكتروني"
              rules={[
                {
                  type: 'email',
                  message: 'البريد الإلكتروني يجب ان يكون موجود',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="password"
              label="كلمة المرور"
              rules={[
                {
                  required: true,
                  message: 'الرجاء ادخال رقم الهاتف',
                },
                {
                  min: 8,
                  message: ' كلمة المرور يجب أن تكون أكبر من 7 ',
                },
                {
                  max: 16,
                  message: 'كلمة المرور  يجب أن تكون أقل من 14 ',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className="formItem"
              name="تأكيد كلمة المرور"
              label="تأكيد كلمة المرور"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'الرجاء تأكيد كلمة المرور',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('كلمات السر لم تتطابق'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: '#3380FF', marginTop: '26px', fontSize: 'large', height: '40px',
            }}
          >
            <PlusCircleOutlined style={{ fontSize: 'large' }} />
            إضافة مستخدم
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
