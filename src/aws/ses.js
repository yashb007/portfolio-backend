const { SESClient, SendTemplatedEmailCommand } = require('@aws-sdk/client-ses');

const sesClient = new SESClient({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey:process.env.secretAccessKey
  }
});

module.exports = { sesClient, SendTemplatedEmailCommand};