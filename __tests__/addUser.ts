import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Users API', () => {
    test('Users -post api/v1/user/adduser/', async () => {
      const response = await request(app)
        .post('/api/v1/user/adduser')
        .send({
            firstName: 'Bayan',
            lastName: ' Abd El Bary',
            phoneNumber: '0591212312',
            email: 'bayan@gmail.com',
            password: 'password'
        })
        .expect(201);
      expect(response.body.message).toBe("User Created Successfully");
    });
        test('Users -post api/v1/user/adduser/', async () => {
          const response = await request(app)
            .post('/api/v1/user/adduser')
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
    test('Users -post api/v1/user/adduser/', async () => {
        const response = await request(app)
          .post('/api/v1/user/adduser')
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
      test('Users -post api/v1/user/adduser/', async () => {
        const response = await request(app)
          .post('/api/v1/user/adduser')
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
      test('Users -post api/v1/user/adduser/', async () => {
        const response = await request(app)
          .post('/api/v1/user/adduser')
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
  });


  afterAll(async () => sequelize.close());
