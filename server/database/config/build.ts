import sequelize from './connection';
import {
  Announcements, Advertisements, Bills, Flats, Services,
} from './fakeData';

import {
  Announcement, Advertisement, Bill, Flat, Service,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(Announcements);
    await Advertisement.bulkCreate(Advertisements);
    await Bill.bulkCreate(Bills);
    await Flat.bulkCreate(Flats);
    await Service.bulkCreate(Services);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Database Failed', err);
  }
};
insertDB();
