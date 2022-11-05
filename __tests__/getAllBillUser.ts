import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flat API', () => {
    // test('Flat -GET api/v1/billUser/:id', async () => {
    //   const response = await request(app)
    //     .get('/api/v1/billUser/3')
    //     .expect(200);
    //   expect(response.body.data.length).toBe(1);
    // });
    test('Flat -GET api/v1/billUser/:id', async () => {
        const response = await request(app)
          .get('/api/v1/billUser/3')
          .expect(200);
        expect(response.body.data[0].flat_number).toBe(103);
      });
      test('Flat -GET api/v1/billUser/:id', async () => {
        const response = await request(app)
          .get('/api/v1/billUser/3')
          .expect(200);
        expect(response.body.data[1].Bills[0].is_open).toBe(true);
      });
     
  });


afterAll(async () => sequelize.close());
