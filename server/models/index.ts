import Advertisement from './Advertisement';
import Announcement from './Announcement';
import BillModule from './Bill';
import FlatModule from './Flat';
import ServiceModule from './Service';

BillModule.hasOne(FlatModule, {
  foreignKey: 'flat_id',
});
FlatModule.belongsTo(BillModule);

// FlatModule.hasOne(User, {
//   foreignKey: 'owner_id',
// });
// User.belongsTo(FlatModule);

export {
  BillModule, FlatModule, ServiceModule, Announcement, Advertisement,
};
