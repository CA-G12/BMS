import FlatModel from './Flat';
import Advertisement from './Advertisement';
import Announcement from './Announcement';
import BillModel from './Bill';
import ServiceModel from './Service';
import ComplaintsModel from './Complaints';
import ContactUsModel from './ContactUs';

FlatModel.hasMany(BillModel, {
  foreignKey: 'flat_id',
});

BillModel.belongsTo(FlatModel, {
  foreignKey: 'flat_id',
});

// User.hasMany(FlatModel, {
//   foreignKey: 'owner_id',
// });
// FlatModel.belongsTo(User, {
//   foreignKey: 'owner_id',
// });

export {
  BillModel, FlatModel, ServiceModel, Announcement, Advertisement, ComplaintsModel, ContactUsModel,
};
