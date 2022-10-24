import * as yup from 'yup';

const servicesSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  is_fixed: yup.boolean().default(true),
  description: yup.string().required(),
  is_open: yup.boolean().default(true),
});

export default servicesSchema;
