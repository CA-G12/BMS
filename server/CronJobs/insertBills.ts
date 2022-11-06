import cron from 'node-cron';

const InseertBillsTask = () => {
  console.log('Task Started');

  const Task = cron.schedule('* * * * 1 *', async () => {
    try {
      console.log('Task Running');
      console.log(new Date());
    } catch (e) {
      console.error(e);
    }
  });
  Task.start();
};
export default InseertBillsTask;
