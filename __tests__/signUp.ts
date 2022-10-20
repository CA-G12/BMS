import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Users API', () => {
    test('Users -post api/v1/signup/', async () => {
      const response = await request(app)
        .post('/api/v1/signUp')
        .send({
            firstName: 'Bayan',
            lastName: ' Abd El Bary',
            phoneNumber: '0591212312',
            email: 'bayan@gmail.com',
            password: 'password'

        })
        .expect(200);
      expect(response.body.message).toBe("تم تسجيل الدخول بنجاح");
      //ToDo: response.body.cerateResult.firstName
    });
    test('Users -post api/v1/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/signUp')
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '0591212312',
              email: 'bayangmail.com',
              password: 'password'
  
          })
          .expect(400);
        expect(response.body.message).toBe("email must be a valid email");
        //ToDo: response.body.cerateResult.firstName
      });
      test('Users -post api/v1/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/signUp')
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '059',
              email: 'bayan@gmail.com',
              password: 'password'
  
          })
          .expect(400);
        expect(response.body.message).toBe("phoneNumber must be at least 7 characters");
        //ToDo: response.body.cerateResult.firstName
      });
      test('Users -post api/v1/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/signUp')
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '0591212312',
              email: 'bayan@gmail.com',
              password: '123'
  
          })
          .expect(400);
        expect(response.body.message).toBe("password must be at least 8 characters");
      });
      test('Users -post api/v1/signUp/', async () => {
        const response = await request(app)
          .post('/api/v1/signUp/nnnn')
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
//ToDo: this is for 79- signUp