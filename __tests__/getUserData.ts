import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';
const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY3Mzc5NjMxfQ.8VG-3PDvoooZjXHvlkW8wzCVk1FY0hqgMjklHVHBSMw'
const userToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjczODAzNjR9.8TJTqirZQwRtdekjSo8JczzT5a9y1JYh7BoNKUK40Ww'
beforeAll(insertDB);

describe('Users API', () => {
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token=${adminToken}`] })
      .expect(200);
      expect(response.body.user).toEqual({id: 1, role:'admin'});
    });
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token=${userToken}`] })
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