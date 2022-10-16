import Payment from './Payment';
import Review from './Review';
import User from './User';
import Announcement from './Announcement';
import Advertisement from './Advertisement';

Payment.hasOne(User, {
  foreignKey: 'user_id',
});
User.belongsTo(Payment);

Review.hasOne(User, {
  foreignKey: 'user_id',
});
User.belongsTo(Review);

export {
  Payment, Review, User, Announcement, Advertisement,
};
