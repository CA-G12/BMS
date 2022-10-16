// eslint-disable-next-line import/no-named-as-default
import app from './app';
import sequelize from './database/config/connection';

const port = app.get('port') as number;

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`The Server is running on http://localhost:${port}`);
    });
  })
  // eslint-disable-next-line no-console
  .catch(() => console.log('Error on synchronizing db'));
