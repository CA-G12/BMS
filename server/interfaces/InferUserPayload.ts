import { Request } from 'express';

interface InferUserPayload {
  id: number;
  role: string;
}

interface InferRequestPayload extends Request {
  user: InferUserPayload
}
export { InferUserPayload, InferRequestPayload };
