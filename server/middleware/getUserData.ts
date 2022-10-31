import { Request } from 'express';

const getUserData = async (req: Request) => {
  const { user } = req.body;
  return { data: user };
};

export default getUserData;
