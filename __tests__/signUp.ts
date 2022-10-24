import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Users API', () => {
    test('Users -post api/v1/auth/signUp/', async () => {
      const response = await request(app)
        .post('/api/v1/auth/signUp')
        .send({
            firstName: 'Bayan',
            lastName: ' Abd El Bary',
            phoneNumber: '0591212312',
            email: 'bayan@gmail.com',
            password: 'password'
        })
        .expect(200);
      expect(response.body.message).toBe("Logged in Successfully");
    });
        test('Users -post api/v1/auth/signUp/', async () => {
          const response = await request(app)
            .post('/api/v1/auth/signUp')
            .send({
                firstName: 'Bayan',
                lastName: ' Abd El Bary',
                phoneNumber: '0591212312',
                email: 'bayan@gmail.com',
                password: 'password'
            })
            .expect(400);
          expect(response.body.message).toBe("Phone Number Already Exist");
        });
    test('Users -post api/v1/auth/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/auth/signUp')
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '0591212312',
              email: 'bayangmail.com',
              password: 'password'
          })
          .expect(400);
        expect(response.body.message).toEqual(["email must be a valid email"]);
      });
      test('Users -post api/v1/auth/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/auth/signUp')
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '059',
              email: 'bayan@gmail.com',
              password: 'password'
          })
          .expect(400);
        expect(response.body.message).toEqual(["phoneNumber must be at least 7 characters"]);
      });
      test('Users -post api/v1/auth/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/auth/signUp')
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '0591212312',
              email: 'bayan@gmail.com',
              password: '123'
          })
          .expect(400);
        expect(response.body.message).toEqual(["password must be at least 8 characters"]);
      });
      test('Users -post api/v1/auth/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/auth/signUp/nnnn')
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '05912123123',
              email: 'bayan@gmail.com',
              password: 'password'
          })
          .expect(404);
        expect(response.body.message).toBe("Not Found");
      });
  });


  afterAll(async () => sequelize.close());
