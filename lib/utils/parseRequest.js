module.exports = rawRequest => {
  
  const result = rawRequest.split(' ');
  const body = result[4].split('{');

  if(body[1])
    return {
      method: result[0],
      path: result[1],
      body: '{' + body[1]
    }; else return {
    method: result[0],
    path: result[1]
  };
};
