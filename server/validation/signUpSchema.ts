import * as yup from 'yup';

const SignUpSchema = yup.object({
  firstName: yup.string().required('الاسم مطلوب'),
  lastName: yup.string().required('الاسم مطلوب'),
  phoneNumber: yup.string()
    .required('حقل رقم الهاتف مطلوب')
    .min(7, 'رقم الهاتف يجب أن تكون أكثر من {0}')
    .max(14, 'رقم الهاتف يجب أن تكون أقل من {0}'),
  email: yup.string().email('يجب أن يكون بريدك الإلكتروني بريدًا إلكترونيًا صالحًا').required('مطلوب بريدك الإلكتروني'),
  password: yup.string()
    .required('جقل كلمة المرور مطلوبرقم الهاتف مطلوب')
    .min(8, 'كلمة المرور يجب أن تكون أكثر من {0}')
    .max(16, 'كلمة المرور يجب أن تكون أقل من {0}'),

});

export default SignUpSchema;
