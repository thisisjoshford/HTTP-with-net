const createResponse = require('../utils/createResponse');

describe('createResponse', () => {
  it('creates a valid HTTP response', () => {
    const response = createResponse({
      body: '<h1>hi there</h1>',
      status: '200 OK',
      contentType: 'text/html'
    });
    console.log(response);

    expect(response).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 17
Content-Type: text/html

<h1>hi there</h1>`);
  });
});
