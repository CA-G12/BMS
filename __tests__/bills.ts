import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Bills API', () => {
    test('Flat -GET api/v1/bills?{qs}', async () => {
      const querysString='results=10&page=1&pagination%5Bcurrent%5D=1&pagination%5BpageSize%5D=10'
      const response = await request(app)
        .get(`/api/v1/bills?${querysString}`)
        .expect(200);
        const dataLength = JSON.parse(response.text).result.length;
      expect(dataLength).toBe(4);
    });
  });


afterAll(async () => sequelize.close());
