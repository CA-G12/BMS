import sequelize from './connection';
import {
  Announcements, Advertisements, complaints, contactUs,
} from './fakeData';

import {
  Announcement, Advertisement, ComplaintsModel, ContactUsModel,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(Announcements);
    await Advertisement.bulkCreate(Advertisements);
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
