import JWT from 'jsonwebtoken';
import CustomError from '../helpers';

const { SECRET_KEY, EXPIRES_IN } = process.env;

const GenerateToken = (payload, res, next) => {
  JWT.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN }, (err, data) => {
    if (err) {
      next(err);
    }
    res.cookie('token', data);
    res.cookie('name', payload.name);
    res.cookie('phone_number', payload.phone_number);
    res.status(200).json({ message: 'تم تسجيل الدخول بنجاح' });
  });
};

const Authenticate = (req, res, next) => {
  const { token } = req.cookies;
  JWT.verify(token, SECRET_KEY, (err, data) => {
    if (!err) {
      req.user = {
        role: data.role,
        id: data.id,
      };
    }
    next();
  });
};

const Authorize = (req, res, next, user_role) => {
  try {
    if (!req.user) {
      throw new CustomError(
        401,
        'المستخدم غير موثق',
      );
    } else {
      const { role } = req.user;
      if (!user_role || role === user_role) {
        next();
      } else {
        throw new CustomError(
          403,
          'المستخدم غير مصرح بالدخول لهذه الصفحة',
        );
      }
    }
  } catch (err) {
    next(err);
  }
};

export {
  GenerateToken, Authenticate, Authorize,
};
