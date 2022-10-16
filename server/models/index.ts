import Payment from './Payment';
import User from './User';
import Announcement from './Announcement';
import Advertisement from './Advertisement';

User.hasMany(Payment, {
  foreignKey: 'user_id',
});
Payment.belongsTo(User, {
  foreignKey: 'user_id',
});

export {
  Payment, User, Announcement, Advertisement,
};
