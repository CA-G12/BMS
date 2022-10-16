import sequelize from './connection';
import
{
  Announcements, Advertisements, Users, Reviews, Payments,
}
  from './fakeData';

import {
  Announcement, Advertisement, Review, User, Payment,
} from '../../models';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(Announcements);
    await Advertisement.bulkCreate(Advertisements);
    await User.bulkCreate(Users);
    await Review.bulkCreate(Reviews);
    await Payment.bulkCreate(Payments);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Database Failed', err);
  }
};
insertDB();
