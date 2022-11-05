import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flats API', () => {
    test('Flat -GET api/v1/Flat/:id', async () => {
      const response = await request(app)
        .get('/api/v1/flats/1')
        .expect(200);
      expect(response.body.data.length).toBe(1);
    });
    test('Flat -GET api/v1/Flat/:id', async () => {
        const response = await request(app)
          .get('/api/v1/flats/1')
          .expect(200);
        expect(response.body.data[0].flat_number).toBe(101);
      });
      test('Flat -GET api/v1/Flat/:id', async () => {
        const response = await request(app)
          .get('/api/v1/flats/1')
          .expect(200);
        expect(response.body.data[0].User.phone_number).toBe('0591000100');
      });
      test('Flat -GET api/v1/Flat/:id', async () => {
        const response = await request(app)
          .get('/api/v1/flats/1')
          .expect(200);
        expect(response.body.data[0].User.first_name).toBe('أحمد');
      });
  });


afterAll(async () => sequelize.close());