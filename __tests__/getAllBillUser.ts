import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flat API', () => {
    test('Flat -GET api/v1/billUser/', async () => {
      const response = await request(app)
      .get('/api/v1/billUser/')
      .expect(500);
      // expect 500 because there is no cookie and the id should taken from it
      });
  });


afterAll(async () => sequelize.close());
