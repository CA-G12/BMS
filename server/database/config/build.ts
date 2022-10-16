import sequelize from './connection';
import {
  announcements, advertisements, bills, flats, services, users, payments,
} from './fakeData';

import {
  AnnouncementModel, AdvertisementModel, BillModel, FlatModel, ServiceModel, UserModel,
  PaymentModel,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await AnnouncementModel.bulkCreate(announcements);
    await AdvertisementModel.bulkCreate(advertisements);
    await UserModel.bulkCreate(users);
    await PaymentModel.bulkCreate(payments);
    await FlatModel.bulkCreate(flats);
    await BillModel.bulkCreate(bills);
    await ServiceModel.bulkCreate(services);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Database Failed', err);
  }
};
insertDB();
