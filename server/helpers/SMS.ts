import dotenv from 'dotenv';
import Vonage from '@vonage/server-sdk';
import { SMSMessage } from '../interfaces/SMSMessage';
import CustomError from './customError';

dotenv.config();

const SendSMS = ({ recipient, message }: SMSMessage) : boolean => {
  const {
    SMS_SECRET, SMS_KEY, PHONE_NUMBER_CODE,
  } = process.env;

  const vonage = new Vonage({
    apiKey: SMS_KEY,
    apiSecret: SMS_SECRET,
  });

  const sender = 'BMS';

  vonage.message.sendSms(
    sender,
    PHONE_NUMBER_CODE + recipient,
    message,
    (
      err:MessageError,
      responseData:MessageRequestResponse,
    ) => {
      if (err) {
        throw new Error(err);
      } else if (responseData.messages[0].status === '0') {
        return true;
      } else {
        throw new CustomError(400, `Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    },
    {},
  );
  return false;
};

export default SendSMS;
