import axios from 'axios';
import { IContactUsModel } from '../Models/contactUs';
import { contactUsURL } from '../Utilities/apiConsts';

const sendContactUs = (contactMessage: IContactUsModel) => axios.post(contactUsURL, {
  name: contactMessage.name,
  email: contactMessage.email,
  phone: contactMessage.phoneNumber,
  subject: contactMessage.subject,
  description: contactMessage.description,
});

export default sendContactUs;
