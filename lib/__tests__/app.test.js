const request = require('supertest');
const app = require('../app');

describe('app routes', () => {
  it('displays the home page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('posts to the echo route', () => {
    return request(app)
      .post('/echo')
      .send('Working Route')
      .then(res => {
        expect(res.text).toEqual('Working Route');
      });
  });

  it('gets /red route', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`<html>
        <body>
          <h1>red</h1>
        </body>
      </html>`);
      });
  });

  it('gets /green route', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`<html>
        <body>
          <h1>green</h1>
        </body>
      </html>`);
      });
  });
});
