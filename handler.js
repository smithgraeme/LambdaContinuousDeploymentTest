'use strict';

module.exports.hello = async (event, context) => {
  console.log("Hello from the serverless! Deployment worked. Deployed via git pipeline.");

  console.log(JSON.stringify(event.queryStringParameters));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully! Deployed via git pipeline.',
      input: event.queryStringParameters,
      event: event,
    }),
  };
};
