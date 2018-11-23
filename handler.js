'use strict';

module.exports.hello = async (event, context) => {
  console.log("Hello from the serverless!!")

  console.log(JSON.stringify(event.queryStringParameters));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event.queryStringParameters,
    }),
  };
};