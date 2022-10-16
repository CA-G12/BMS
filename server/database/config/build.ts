import sequelize from './connection';
import
{
  announcements, advertisements, users, reviews, payments,
}
  from './fakeData';

import {
  Announcement, Advertisement, Review, User, Payment,
} from '../../models';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Announcement.bulkCreate(announcements);
    await Advertisement.bulkCreate(advertisements);
    await User.bulkCreate(users);
    await Review.bulkCreate(reviews);
    await Payment.bulkCreate(payments);

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Database Failed', err);
  }
};
insertDB();
