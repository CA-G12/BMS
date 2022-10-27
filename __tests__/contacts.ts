import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Contact API', () => {
    test('Contact -GET api/v1/contacts/', async () => {
      const response = await request(app)
        .get('/api/v1/contacts/')
        .expect(200);
      expect(response.body.data.length).toBe(3);
    });
    test('Contact -GET api/v1/contacts/', async () => {
      const response = await request(app)
        .get('/api/v1/contacts/')
        .expect(200);
      expect(response.body.data[0].name).toBe('محمد أمين');
    });
    test('Contact -GET api/v1/contacts/', async () => {
        const response = await request(app)
          .get('/api/v1/contacts/')
          .expect(200);
        expect(response.body.data[1].phone).toBe('059200000');
      });
  });


afterAll(async () => sequelize.close());
