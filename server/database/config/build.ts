import sequelize from './connection';
import {
  reviews, transactions, users,
} from './fakeData';
import {
  Reviews, Transactions, Users,
} from '../../models/index';

const dbConnect = () => sequelize.sync();

const insertDB = async () => {
  await sequelize.sync({ force: true });
  await Users.bulkCreate(users);
  await Transactions.bulkCreate(transactions);
  await Reviews.bulkCreate(reviews);
};
insertDB();
export default dbConnect;
