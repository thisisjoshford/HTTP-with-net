const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('displays the home page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

});
