import * as yup from 'yup';

const announcementSchema = yup.object().shape({
  title: yup.string().required(),
  start_date: yup.string().required(),
  end_date: yup.string().required(),
});

export default announcementSchema;
