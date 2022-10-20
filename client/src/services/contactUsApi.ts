import axios from 'axios';
import { InferContactUsModel } from '../Models/contactUs';
import { contactUsURL } from '../Utilities/apiConsts';

const sendContactUs = (contactData: InferContactUsModel) => axios.post(contactUsURL, {
  name: contactData.name,
  email: contactData.email,
  phone: contactData.phone,
  subject: contactData.subject,
  description: contactData.description,
});

export default sendContactUs;
