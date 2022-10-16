import sequelize from './connection';
import {
  Announcements, Advertisements, Bills, Flats, Services,
} from './fakeData';

import {
  Announcement, Advertisement, BillModule, FlatModule, ServiceModule,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(Announcements);
    await Advertisement.bulkCreate(Advertisements);
    await BillModule.bulkCreate(Bills);
    await FlatModule.bulkCreate(Flats);
    await ServiceModule.bulkCreate(Services);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    console.log('Build Database Failed', err);
  }
};
insertDB();
