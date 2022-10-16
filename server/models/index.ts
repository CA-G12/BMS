import PaymentModel from './Payment';
import UserModel from './User';
import FlatModel from './Flat';
import AdvertisementModel from './Advertisement';
import AnnouncementModel from './Announcement';
import BillModel from './Bill';
import ServiceModel from './Service';

FlatModel.hasMany(BillModel, {
  foreignKey: 'flat_id',
});

BillModel.belongsTo(FlatModel, {
  foreignKey: 'flat_id',
});

UserModel.hasMany(FlatModel, {
  foreignKey: 'owner_id',
});
FlatModel.belongsTo(UserModel, {
  foreignKey: 'owner_id',
});

UserModel.hasMany(PaymentModel, {
  foreignKey: 'user_id',
});
PaymentModel.belongsTo(UserModel, {
  foreignKey: 'user_id',
});

export {
  PaymentModel, UserModel, BillModel, FlatModel, ServiceModel, AnnouncementModel,
  AdvertisementModel,
};
