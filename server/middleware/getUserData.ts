import { Response } from 'express';
import { InferRequestPayload } from '../interfaces/InferUserPayload';

const getUserData = (req: InferRequestPayload, res: Response) => {
  const { user } = req;
  res.json({ user });
};

export default getUserData;
