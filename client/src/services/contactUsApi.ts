import axios from 'axios';
import { IContactUsModel } from '../Models/contactUs';
import { contactUsURL } from '../Utilities/apiConsts';

const sendContactUs = (contactData: IContactUsModel) => axios.post(contactUsURL, {
  name: contactData.name,
  email: contactData.email,
  phone: contactData.phone,
  subject: contactData.subject,
  description: contactData.description,
});

export default sendContactUs;
