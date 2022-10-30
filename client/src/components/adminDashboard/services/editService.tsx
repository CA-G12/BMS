import {
  Typography, Form, Input, Switch, Button, message,
} from 'antd';
import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { InferAddServicesModel } from '../../../Interfaces/addService';
import { InferServicesModel } from '../../../Interfaces/services';

const { Title } = Typography;

type RequiredMark = boolean | 'optional';

const EditService: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const { id } = useParams();

  const [service, setService] = useState<InferServicesModel>({
    id: 0, name: '', price: 0, description: '', is_fixed: true, is_open: true,
  });
  const fetchData = (signal : AbortSignal) => {
    axios.get(`/api/v1/services/${Number(id)}`, { signal })

      .then(({ data: { data } }) => {
        setService(data as InferServicesModel);
        form.setFieldsValue(data);
      }).catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  const onFinish = (values : InferAddServicesModel) => {
    axios.put(`/api/v1/services/${Number(id)}`, values)
      .then(() => navigate('/admin/services'))
      .catch(() => message.error('حدث خطأ , اعد المحاولة'));
  };

  return (
    <div>
      <Title className="addService">تعديل الخدمة</Title>

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
          <Switch
            checked={service.is_fixed}
            onClick={() => {
              setService({ ...service, is_fixed: !service.is_fixed });
            }}
          />
        </Form.Item>
        <Form.Item initialValue name="isOpen" label="تفعيل / الغاء التفعيل" required>
          <Switch checked={service.is_open} onClick={() => setService({ ...service, is_open: !service.is_open })} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">تعديل الخدمة</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditService;