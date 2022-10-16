import sequelize from './connection';
import {
  announcements, advertisements, services, bills, flats, complaints, contactUs,
} from './fakeData';

import {
  Announcement, Advertisement, BillModel, FlatModel, ServiceModel, ComplaintsModel, ContactUsModel,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(announcements);
    await Advertisement.bulkCreate(advertisements);
    await FlatModel.bulkCreate(flats);
    await BillModel.bulkCreate(bills);
    await ServiceModel.bulkCreate(services);
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
