import {
  Typography, Button, Form, Input,
} from 'antd';
import React, { useState } from 'react';
import '../../../App/style.css';

const { Title } = Typography;

type RequiredMark = boolean | 'optional';

const AddService: React.FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
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
      >
        <Form.Item label="اسم الخدمة" required>
          <Input className="inputAddService" />
        </Form.Item>
        <Form.Item label="سعر الخدمة" required>
          <Input className="inputAddService" />
        </Form.Item>
        <Form.Item label="الوصف" required>
          <Input className="inputAddService" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">اضافة خدمة</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddService;
