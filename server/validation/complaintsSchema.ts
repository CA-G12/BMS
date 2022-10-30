import * as yup from 'yup';

const complaintsSchema = yup.object().shape({
  subject: yup.string().required(),
  description: yup.string().required(),
});

export default complaintsSchema;
