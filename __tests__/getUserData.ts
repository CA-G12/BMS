import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';
import dotenv from 'dotenv'
dotenv.config()
beforeAll(insertDB);

describe('Users API', () => {
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token=${process.env.ADMIN_TOKEN}`] })
      .expect(200);
      expect(response.body.user).toEqual({id: 1, role:'admin'});
    });
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token=${process.env.USER_TOKEN}`] })
      .expect(200);
      expect(response.body.user).toEqual({id: 2, role:'user'});
    });
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token= `] })
      .expect(400);
      console.log(response.body)
      expect(response.body.message).toBe('Your are not authorize');
    });
    
  });


afterAll(async () => sequelize.close());