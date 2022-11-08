import {
  Form, message, Row, Col, Input, Button, Switch,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Loading } from '../components';
import authContext from '../context';
import { UserContext } from '../context/AuthContext';

const UserProfile: React.FC = () => {
  const { user } = useContext(authContext) as UserContext;
  const [form] = Form.useForm();
  const [editable, setEditable] = useState<boolean>(false);
  const id = (user ? user.id : 0);

  const [profileData, setProfileData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = (signal: AbortSignal) => {
    axios.get('/api/v1/user/profile', { signal })
      .then(({ data: { data } }) => {
        setProfileData(data as Array<IUser>);
        setLoading(false);
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  const onFinish = (values : IUpdateUser) => {
    if (!editable) return;
    setLoading(true);
    axios.put('/api/v1/user/profile', values)
      .then(() => {
        setEditable(false);
        setLoading(false);
        return message.success(' تم التعديل بنجاح ');
      })
      .catch(() => message.error('حدث خطأ ما'));
  };
  // if (!loading) {
  //   form.setFieldsValue({
  //     firstName: profileData.first_name,
  //     lastName: profileData.last_name,
  //     email: profileData.email,
  //   });
  // }
  return (
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
            بياناتي
          </Title>

        </Col>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Switch
            defaultChecked={false}
            checked={editable}
            onChange={(e) => setEditable(e)}
          />
          <p style={{
            paddingTop: '10px',
            paddingRight: '6px',
            color: '#0d7ddb',
          }}
          >
            تعديل

          </p>
        </div>

      </Row>
      {loading ? <Loading /> : (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          margin: 'auto 50px',
        }}
        >
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            requiredMark={false}
            initialValues={{
              remember: true,
            }}
          >
            <Row>
              <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }}>
                <Form.Item
                  name="firstName"
                  label="الاسم الأول"
                  initialValue={profileData[0].first_name}
                  rules={[{ required: true, message: 'الرجاء ادخال اسمك الأول' }]}
                  className="formItem"
                >
                  <Input readOnly={!editable} bordered={editable} style={{ color: '#0d7ddb', borderRadius: '5px' }} />
                </Form.Item>

                <Form.Item
                  className="formItem"
                  name="phoneNumber"
                  label="رقم الهاتف"
                  initialValue={profileData[0].phone_number}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input readOnly bordered={false} style={{ color: '#0d7ddb' }} />
                </Form.Item>

                {profileData.length === 1 ? (
                  <Form.Item
                    className="formItem"
                    name="flatNumber"
                    label="رقم الشقة "
                    initialValue={profileData[0]['Flats.flat_number']}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input readOnly bordered={false} style={{ color: '#0d7ddb' }} />
                  </Form.Item>
                ) : (
                  <Form.Item
                    className="formItem"
                    name="flatNumber"
                    label="رقم الشقق "
                    initialValue={profileData.map((x) => x['Flats.flat_number'])}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input readOnly bordered={false} style={{ color: '#0d7ddb' }} />
                  </Form.Item>
                )}

              </Col>
              <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                <Form.Item
                  className="formItem"
                  name="lastName"
                  label="اسم العائلة"
                  initialValue={profileData[0].last_name}
                  rules={[
                    {
                      required: true,
                      message: 'الرجاء ادخال اسم العائلة',
                    },
                  ]}
                >
                  <Input readOnly={!editable} bordered={editable} style={{ color: '#0d7ddb', borderRadius: '5px' }} />
                </Form.Item>
                <Form.Item
                  className="formItem"
                  name="email"
                  label="البريد الإلكتروني"
                  initialValue={profileData[0].email}
                  rules={[
                    {
                      type: 'email',
                      message: 'البريد الإلكتروني يجب ان يكون موجود',
                      required: true,
                    },
                  ]}
                >
                  <Input readOnly={!editable} bordered={editable} style={{ color: '#0d7ddb', borderRadius: '5px' }} />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    hidden={!editable}
                    style={{
                      backgroundColor: '#3380FF', marginTop: '26px', height: '40px',
                    }}
                  >
                    تعديل بياناتي
                  </Button>
                </Form.Item>
              </Col>
            </Row>

          </Form>
        </div>
      )}
    </>
  );
};

export default UserProfile;
export interface IUser {
  first_name: string;
  last_name: string;
  email:string;
  phone_number: string;
  id:number;
  'Flats.flat_number': number;
}
export interface IUpdateUser {
  first_name?: string;
  last_name?: string;
  email?:string;
}