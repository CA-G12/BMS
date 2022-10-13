import app from './app';
import sequelize from './database/config/connection';

const port = app.get('port') as number;

sequelize.sync({ force: true }) // TODO: To be reomved later when DB is 100% ready
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`The Server is running on http://localhost:${port}`);
    });
  })
  // eslint-disable-next-line no-console
  .catch(() => console.log('Error on synchronizing db'));
