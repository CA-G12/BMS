import sequelize from './connection';
import
{
  Announcements, Advertisements, Users, Reviews, Transactions,
}
  from './fakeData';

import {
  Announcement, Advertisement, Review, User, Transaction,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(Announcements);
    await Advertisement.bulkCreate(Advertisements);
    await Review.bulkCreate(Reviews);
    await User.bulkCreate(Users);
    await Transaction.bulkCreate(Transactions);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Database Failed', err);
  }
};
insertDB();
