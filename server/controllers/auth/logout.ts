import {
  NextFunction,
  Request, Response,
} from 'express';

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('token');
    res.json({ status: 200, msg: 'Logged Out' });
  } catch (err) {
    next(err);
  }
};
export default logout;
