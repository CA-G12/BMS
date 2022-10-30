import axios from 'axios';
import { IBillsResponse } from '../Interfaces/Bills';
import { getBillsURL, sendBillSMSURL } from '../Utilities/apiConsent';

const getBills = (payload:string): Promise<IBillsResponse> => axios.get(getBillsURL + payload);

const sendBillSMS = (billID:number): Promise<boolean> => axios.get(`${sendBillSMSURL}${billID}`);

export { sendBillSMS, getBills };
