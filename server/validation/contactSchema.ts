import {
  object, string,
} from 'yup';

const contactSchema = object({
  name: string().required('الاسم مطلوب'),
  email: string().email('يجب أن يكون بريدك الإلكتروني بريدًا إلكترونيًا صالحًا').required('مطلوب بريدك الإلكتروني للاتصال بنا'),
  phone: string().min(10, 'يجب أن يتكون رقم هاتفك من 10 أرقام').required('رقم هاتفك مطلوب'),
  subject: string().required('العنوان مطلوب'),
  description: string().required('الوصف مطلوب'),

});

export default contactSchema;
