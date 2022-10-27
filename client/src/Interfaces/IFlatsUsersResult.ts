export interface IFlatsUsersResult {
  id: number;
  full_name: number;
  flat_number: number;
  phone_number: string;
}

export interface IFlatsUsersResponse {
  data: Data;
}
interface Data {
  result: IFlatsUsersResult[];
  total: number;
}
