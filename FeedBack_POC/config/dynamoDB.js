const dynamoose = require('dynamoose');
require('dotenv').config();

const dynamoDBConfig = new dynamoose.aws.ddb.DynamoDB({
    region: process.env.AWS_DEFAULT_REGION,
});

dynamoose.aws.ddb.set(dynamoDBConfig);