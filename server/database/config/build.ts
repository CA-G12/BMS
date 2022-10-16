import sequelize from './connection';
import {
  announcements, advertisements, bills, flats, services,
} from './fakeData';

import {
  Announcement, Advertisement, BillModule, FlatModule, ServiceModule,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(announcements);
    await Advertisement.bulkCreate(advertisements);
    await FlatModule.bulkCreate(flats);
    await BillModule.bulkCreate(bills);
    await ServiceModule.bulkCreate(services);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    console.log('Build Database Failed', err);
  }
};
insertDB();
