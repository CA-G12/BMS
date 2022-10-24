import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Services API', () => {
    test('Services -post api/v1/services/', async () => {
      const response = await request(app)
        .post('/api/v1/services')
        .send({
            id:1,
            name: 'خدمات عامة',
            price: 100,
            is_fixed: true,
            description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
            "is_open": true

        })
        .expect(201);
      expect(response.body.data.price).toBe(100);
    });
    test('Services -post api/v1/services/', async () => {
        const response = await request(app)
          .post('/api/v1/services')
          .send({
              id:1,
              name: 'خدمات عامة',
              price: 900,
              is_fixed: true,
              description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
              "is_open": true

          })
          .expect(201);
        expect(response.body.data.price).toBe(900);
      });
      test('Services -post api/v1/services/', async () => {
        const response = await request(app)
          .post('/api/v1/services')
          .send({
              id:1,
              name: 'خدمات',
              price: 100,
              is_fixed: true,
              description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
              "is_open": true

          })
          .expect(201);
        expect(response.body.data.name).toBe("خدمات");
      });
      test('Services -post api/v1/services/', async () => {
        const response = await request(app)
          .post('/api/v1/services')
          .send({
              id:1,
              name: 'خدمات عامة',
              price: 120,
              is_fixed: true,
              description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
              "is_open": true

          })
          .expect(201);
        expect(response.body.data.price).toBe(120);
      });

    test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[0].price).toBe(100);
      });
      test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[1].price).toBe(0);
      });
      test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[2].price).toBe(0);
      });
      test('Flat -GET api/v1/services/', async () => {
        const response = await request(app)
          .get('/api/v1/services/')
          .expect(200);
        expect(response.body.data[0].is_fixed).toBe(true);
      });

      test('Services -put api/v1/services/', async () => {
        const response = await request(app)
          .put('/api/v1/services')
          .send({
              id:1,
              name: 'خدمات عامة',
              price: 100,
              is_fixed: true,
              description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
          })
          .expect(200);
        expect(response.body.data[0].price).toBe(100);
      });
      test('Services -put api/v1/services/', async () => {
          const response = await request(app)
            .put('/api/v1/services')
            .send({
                id:1,
                name: 'خدمات عامة',
                price: 900,
                is_fixed: true,
                description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
            })
            .expect(200);
          expect(response.body.data[0].price).toBe(900);
        });
        test('Services -put api/v1/services/', async () => {
          const response = await request(app)
            .put('/api/v1/services')
            .send({
                id:1,
                name: 'خدمات',
                price: 100,
                is_fixed: true,
                description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
            })
            .expect(200);
          expect(response.body.data[0].name).toBe("خدمات");
        });
        test('Services -put api/v1/services/', async () => {
          const response = await request(app)
            .put('/api/v1/services')
            .send({
                id:1,
                name: 'خدمات عامة',
                price: 120,
                is_fixed: true,
                description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
            })
            .expect(200);
          expect(response.body.data[0].price).toBe(120);
        });
  });


afterAll(async () => sequelize.close());
