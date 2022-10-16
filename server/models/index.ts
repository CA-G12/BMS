import FlatModule from './Flat';
import Advertisement from './Advertisement';
import Announcement from './Announcement';
import BillModule from './Bill';
import ServiceModule from './Service';

FlatModule.hasMany(BillModule, {
  foreignKey: 'flat_id',
});

BillModule.belongsTo(FlatModule, {
  foreignKey: 'flat_id',
});

// User.hasMany(FlatModule, {
//   foreignKey: 'owner_id',
// });
// FlatModule.belongsTo(User, {
//   foreignKey: 'owner_id',
// });

export {
  BillModule, FlatModule, ServiceModule, Announcement, Advertisement,
};
