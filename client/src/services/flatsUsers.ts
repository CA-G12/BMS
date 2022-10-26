import axios from 'axios';
import { IFlatsUsersResponse } from '../Models/IFlatsUsersResult';

const getFlatsUsers = (payload:string, signal:AbortSignal): Promise<IFlatsUsersResponse> => axios.get(`/api/v1/flatsUsers?${payload}`, { signal });

export default getFlatsUsers;
