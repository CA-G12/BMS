import * as yup from 'yup';

const loginValidation = yup.object().shape({
  phoneNumber: yup.string()
    .required('حقل رقم الهاتف مطلوب')
    .min(7, 'رقم الهاتف يجب أن تكون أكثر من {0}')
    .max(14, 'رقم الهاتف يجب أن تكون أقل من {0}'),
  password: yup.number()
    .required('جقل كلمة المرور مطلوبرقم الهاتف مطلوب')
    .min(8, 'كلمة المرور يجب أن تكون أكثر من {0}')
    .max(16, 'كلمة المرور يجب أن تكون أقل من {0}'),
});

export default loginValidation;
