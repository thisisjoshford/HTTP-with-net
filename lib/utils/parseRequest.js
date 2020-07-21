module.exports = rawRequest => {
  // console.log(rawRequest);
  const pattern = /(?<method>\w+)\s(?<path>\/\w*)/;
  const parse = rawRequest.match(pattern).groups;

  if(rawRequest.includes('\r')) {
    const bodySplit = rawRequest.split('\n');
    const body = bodySplit[bodySplit.length - 1];
    parse.body = body;
  }
  return parse;
};
