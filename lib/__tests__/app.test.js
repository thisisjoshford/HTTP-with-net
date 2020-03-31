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

});
