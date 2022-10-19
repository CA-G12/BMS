import { Request } from 'express';

interface IUserPayload {
  id: number;
  role: string;
}

interface IRequestPayload extends Request {
  user: IUserPayload
}
export { IUserPayload, IRequestPayload };
