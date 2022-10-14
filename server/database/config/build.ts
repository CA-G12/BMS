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
    await User.bulkCreate(Users);
    await Review.bulkCreate(Reviews);
    await Transaction.bulkCreate(Transactions);

    // Relaships
    Transaction.hasOne(User, {
      foreignKey: 'user_id',
    });
    Review.hasOne(User, {
      foreignKey: 'user_id',
    });

    // eslint-disable-next-line no-console
    console.log('Build Database Successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Database Failed', err);
  }
};
insertDB();
