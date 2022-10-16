import sequelize from './connection';
import {
  announcements, advertisements, bills, flats, services, complaints, contactUs,
} from './fakeData';

import {
  Announcement, Advertisement, FlatModel, Bill, Service, ComplaintsModel, ContactUsModel,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(announcements);
    await Advertisement.bulkCreate(advertisements);
    await FlatModel.bulkCreate(flats);
    await Bill.bulkCreate(bills);
    await Service.bulkCreate(services);
    await ComplaintsModel.bulkCreate(complaints);
    await ContactUsModel.bulkCreate(contactUs);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Database Failed', err);
  }
};
insertDB();
