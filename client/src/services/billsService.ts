import axios from 'axios';
import { IBillsResponse } from '../Models/Bills';
import { getBillsURL, sendBillSMSURL } from '../Utilities/apiConsts';

const getBills = (payload:string): Promise<IBillsResponse> => axios.get(getBillsURL + payload);

const sendBillSMS = (billID:number): Promise<boolean> => axios.get(`${sendBillSMSURL}${billID}`);

export { sendBillSMS, getBills };
