import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flat API', () => {
    test('FlatsUsers -GET api/v1/flats/available', async () => {
      const response = await request(app)
        .get('/api/v1/flats/available')
        .expect(200);
      expect(response.body.data.length).toBe(11);
    });
    test('FlatsUsers -GET api/v1/flats/available', async () => {
        const response = await request(app)
          .get('/api/v1/flats/available')
          .expect(200);
        expect(response.body.data[0].flat_number).toBe(106);
      });     
      test('FlatsUsers -GET api/v1/flats/available', async () => {
        const response = await request(app)
          .get('/api/v1/flats/available')
          .expect(200);
        expect(response.body.data[0].id).toBe(6);
      });
      test('FlatsUsers -GET api/v1/flats/available', async () => {
        const response = await request(app)
          .get('/api/v1/flats/available')
          .expect(200);
        expect(response.body.data[1].id).toBe(7);
      });
      test('FlatsUsers -GET api/v1/flats/available', async () => {
        const response = await request(app)
          .get('/api/v1/flats/available/notfound')
          .expect(404);
        expect(response.body.message).toBe("Not Found");
      });

  });


afterAll(async () => sequelize.close());