import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('announcements API', () => {
    test('announcements -DELETE api/v1/announcements/:announcementsId', async () => {
      const response = await request(app)
        .delete('/api/v1/announcements/:announcementsId')
        .expect(200);
      expect(response.body.data.length).toBe(3);
    });
    test('announcements -DELETE api/v1/announcements/:announcementsId', async () => {
        const response = await request(app)
          .delete('/api/v1/announcements/:announcementsId')
          .expect(200);
        expect(response.body.data[0].id).toBe(1);
      });
      test('announcements -DELETE api/v1/announcements/:announcementsId', async () => {
        const response = await request(app)
          .delete('/api/v1/announcements/:announcementsId')
          .expect(200);
        expect(response.body.data[1].start_date).toBe("20/10/2022");
      });
  });


afterAll(async () => sequelize.close());
