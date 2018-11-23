'use strict';

module.exports.hello = async (event, context) => {
  console.log("Hello from the serverless! Deployment worked.");
  console.log("Testing running from CLI")

  console.log(JSON.stringify(event.queryStringParameters));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully!',
      input: event.queryStringParameters,
      event: event,
    }),
  };
};
