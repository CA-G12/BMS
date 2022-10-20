import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('announcements API', () => {
    test('announcements -DELETE api/v1/announcements/:announcementsId', async () => {
      const response = await request(app)
        .delete('/api/v1/announcements/test')
        .expect(200);
      expect(response.body.msg).toBe('Announcement Id must be a number');
    });
    test('announcements -DELETE api/v1/announcements/:announcementsId', async () => {
        const response = await request(app)
          .delete('/api/v1/announcements/-1')
          .expect(200);
        expect(response.body.msg).toBe('Announcement Id must be greater than 0');
      });
      test('announcements -DELETE api/v1/announcements/:announcementsId', async () => {
        const response = await request(app)
          .delete('/api/v1/announcements/100')
          .expect(200);
        expect(response.body.msg).toBe('There is no item have this id');
      });
      test('announcements -DELETE api/v1/announcements/:announcementsId', async () => {
        const response = await request(app)
          .delete('/api/v1/announcements/1')
          .expect(200);
        expect(response.body.msg).toBe('Announcement Deleted Successfully');
      });
  });


afterAll(async () => sequelize.close());