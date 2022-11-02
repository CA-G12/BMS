import { log } from 'console';
import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY3Mzc5NjMxfQ.8VG-3PDvoooZjXHvlkW8wzCVk1FY0hqgMjklHVHBSMw'
beforeAll(insertDB);

describe('Users API', () => {
    test('User -GET api/v1/auth/logout', async () => {
      const response = await request(app)
      .get('/api/v1/auth/logout')
      .set({ Cookie: [`token=${token}`] })
      .expect(200);
      console.log(response.body);
      
      expect(response.body.msg).toBe('Logged Out');
    });
    test('User -GET api/v1/auth/logout', async () => {
        const response = await request(app)
        .get('/api/v1/auth/logout')
        .set({ Cookie: [`token= `] })
        .expect(200);
        expect(response.body.msg).toBe('Logged Out');
      });
      test('User -GET api/v1/auth/logout', async () => {
        const response = await request(app)
        .get('/api/v1/auth/logout/notFound')
        .set({ Cookie: [`token= `] })
        .expect(404);
        expect(response.body.message).toBe('Not Found');
      });
    
  });


afterAll(async () => sequelize.close());