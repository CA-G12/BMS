import {
  Typography, Form, Input, Switch, Button, message,
} from 'antd';
import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InferAddServicesModel } from '../../../Interfaces/addService';

const { Title } = Typography;

type RequiredMark = boolean | 'optional';

const AddService: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = (values : InferAddServicesModel) => {
    // eslint-disable-next-line no-void
    axios.post('/api/v1/services', values)
      .then(() => navigate('/admin/services'))
      .catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };

  return (
    <div>
      <Title className="addService">إضافة خدمة</Title>

      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
        onFinish={onFinish}
      >
        <Form.Item name="name" label="اسم الخدمة" rules={[{ required: true, message: 'الرجاء ادخال اسم الخدمة' }]}>
          <Input className="inputAddService" />
        </Form.Item>
        <Form.Item name="price" rules={[{ required: true, message: 'الرجاء ادخال سعر الخدمة' }]} label="سعر الخدمة">
          <Input type="number" className="inputAddService" />
        </Form.Item>
        <Form.Item name="description" label="الوصف" rules={[{ required: true, message: 'الرجاء ادخال وصف الخدمة' }]}>
          <Input className="inputAddService" />
        </Form.Item>
        <Form.Item initialValue name="isFixed" label="السعر ثابت/غيرثابت" required>
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item initialValue name="isOpen" label="تفعيل / الغاء التفعيل" required>
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">اضافة خدمة</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddService;
