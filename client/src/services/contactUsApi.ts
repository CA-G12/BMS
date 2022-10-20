import axios from 'axios';
import { ContactUsModel } from '../Models/contactUs';
import { contactUsURL } from '../Utilities/apiConsts';

const sendContactUs = (contactMessage: ContactUsModel) => axios.post(contactUsURL, {
  name: contactMessage.name,
  email: contactMessage.email,
  phone: contactMessage.phoneNumber,
  subject: contactMessage.subject,
  description: contactMessage.description,
});

export default sendContactUs;
