import cron from 'node-cron';
import { BillModel, FlatModel, ServiceModel } from '../models';

const InseertBillsTask = () => {
  console.log('Task Started');
  // * * * * 1 *
  const Task = cron.schedule('* * * * 1 *', async () => {
    try {
      const AllFlatsId = await FlatModel.findAll({
        attributes: ['id'],
        where: { is_active: true },
        raw: true,
      });
      console.log('AllFlatsId: ', AllFlatsId);
      const AllServices = await ServiceModel.findAll({
        raw: true,
        attributes: ['name', 'price', 'isFixed', 'description', 'isOpen'],
      });

      let total = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < AllServices.length; i++) {
        total += AllServices[i].price;
      }
      AllFlatsId.forEach(async (flat) => {
        await BillModel.create({
          FlatId: flat.id,
          services: AllServices,
          is_open: true,
          total_price: total,
        });
      });

      console.log('Task Running');
      console.log(new Date());
    } catch (e) {
      console.error(e);
    }
  });
  Task.start();
};
export default InseertBillsTask;
