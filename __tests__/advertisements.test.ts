import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('advertisement API', () => {
    test('Advertisement -GET api/v1/advertisements/', async () => {
      const response = await request(app)
        .get('/api/v1/advertisements/')
        .expect(200);
      expect(response.body.data.length).toBe(3);
    });
  });


afterAll(async () => sequelize.close());
