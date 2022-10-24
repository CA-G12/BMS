import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flat API', () => {
    test('FlatsUsers -GET api/v1/flatsUsers', async () => {
      const response = await request(app)
        .get('/api/v1/flatsUsers?pageNum=2')
        .expect(200);
      expect(response.body.data.length).toBe(2);
    });
    test('FlatsUsers -GET api/v1/flatsUsers', async () => {
        const response = await request(app)
          .get('/api/v1/flatsUsers?pageNum=1')
          .expect(200);
        expect(response.body.data[0].flat_number).toBe(101);
      });
      test('FlatsUsers -GET api/v1/flatsUsers', async () => {
        const response = await request(app)
          .get('/api/v1/flatsUsers?pageNum=1')
          .expect(200);
        expect(response.body.data[1].area).toBe(160);
      });
      test('FlatsUsers -GET api/v1/flatsUsers', async () => {
        const response = await request(app)
          .get('/api/v1/flatsUsers?pageNum=1')
          .expect(200);
        expect(response.body.data[1].UserId).toBe(2);
      });
      test('FlatsUsers -GET api/v1/flatsUsers', async () => {
        const response = await request(app)
          .get('/api/v1/flatsUsers?pageNum=1')
          .expect(200);
        expect(response.body.data[0].UserId).toBe(1);
      });
      test('FlatsUsers -GET api/v1/flatsUsers', async () => {
        const response = await request(app)
          .get('/api/v1/flatsUsers?pageNum=1')
          .expect(200);
        expect(response.body.data[0].User.id).toBe(1);
      });
      test('FlatsUsers -GET api/v1/flatsUsers', async () => {
        const response = await request(app)
          .get('/api/v1/flatsUsers?pageNum=1')
          .expect(200);
        expect(response.body.data[0].User.email).toBe("jcotte0@people.com.cn");
      });
      test('FlatsUsers -GET api/v1/flatsUsers', async () => {
        const response = await request(app)
          .get('/api/v1/flatsUsers/notfound')
          .expect(404);
        expect(response.body.message).toBe("Not Found");
      });

  });


afterAll(async () => sequelize.close());