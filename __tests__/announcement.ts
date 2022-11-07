// import request from 'supertest';
// import app from '../server/app';
// import insertDB from '../server/database/config/build';
// import sequelize from '../server/database/config/connection';

// beforeAll(insertDB);

// describe('announcements API', () => {
//     test('announcements -DELETE api/v1/announcements/:id', async () => {
//       const response = await request(app)
//         .delete('/api/v1/announcements/test')
//         .expect(200);
//       expect(response.body.message).toBe('Announcement Id must be a number and greater then 0');
//     });
//     test('announcements -DELETE api/v1/announcements/:id', async () => {
//         const response = await request(app)
//           .delete('/api/v1/announcements/-1')
//           .expect(200);
//         expect(response.body.message).toBe('Announcement Id must be a number and greater then 0');
//       });
//       test('announcements -DELETE api/v1/announcements/:id', async () => {
//         const response = await request(app)
//           .delete('/api/v1/announcements/100')
//           .expect(200);
//         expect(response.body.message).toBe('There is no item have this id');
//       });
//       test('announcements -DELETE api/v1/announcements/:id', async () => {
//         const response = await request(app)
//           .delete('/api/v1/announcements/1')
//           .expect(200);
//         expect(response.body.message).toBe('Announcement Deleted Successfully');
//       });

//     test('Announcements -GET api/v1/announcements/', async () => {
//         const response = await request(app)
//           .get('/api/v1/announcements/')
//           .expect(200);
//         expect(response.body.data[0].end_date).toBe('21/10/2022');
//       });
//       test('Announcements -GET api/v1/announcements/', async () => {
//         const response = await request(app)
//           .get('/api/v1/announcements/')
//           .expect(200);
//         expect(response.body.data[1].start_date).toBe("20/10/2022");
//       });

//       test('Announcements -post api/v1/announcements/', async () => {
//         const response = await request(app)
//           .post('/api/v1/announcements')
//           .send({
//             title:'تبنيه عام',
//             start_date: '20/10/2022',
//             end_date: '21/10/2022',
//           })
//           .expect(200);
//         expect(response.body.data.start_date).toBe('20/10/2022');
//       });

//       test('Announcements -post api/v1/announcements/', async () => {
//         const response = await request(app)
//           .post('/api/v1/announcements')
//           .send({
//             title:'تبنيه عام رقم 2',
//             start_date: '20/10/2022',
//             end_date: '21/10/2022',
//           })
//           .expect(200);
//         expect(response.body.data.start_date).toBe('20/10/2022');
//       });

//       test('Announcements -GET api/v1/announcements/:id', async () => {
//         const response = await request(app)
//           .get('/api/v1/announcements/3')
//           .expect(200);
//         expect(response.body.data.id).toBe(3);
//       });
//       test('Announcements -GET api/v1/announcements/:id', async () => {
//         const response = await request(app)
//           .get('/api/v1/announcements/2')
//           .expect(200);
//         expect(response.body.data.id).toBe(2);
//       });

//       test('Announcements -put api/v1/announcements/', async () => {
//         const response = await request(app)
//           .put('/api/v1/announcements/2')
//           .send({
//               title: "test",
//               start_date: "2022-10-10",
//               end_date : "2050-10-10"
//           })
//           .expect(200);
//         expect(response.body.data[0].start_date).toEqual("2022-10-10");
//       });
//   });


// afterAll(async () => sequelize.close());