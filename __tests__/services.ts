import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Services API', () => {
    test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[0].price).toBe(100);
      });
      test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[1].price).toBe(0);
      });
      test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[2].price).toBe(0);
      });
      test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[0].is_fixed).toBe(true);
      });
  });


afterAll(async () => sequelize.close());
