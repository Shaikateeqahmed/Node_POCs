const dynamoose = require('dynamoose');
require('dotenv').config();

const dynamoDBConfig = new dynamoose.aws.ddb.DynamoDB({
    "crredentials": {
        "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY
    },
    "region": process.env.AWS_DEFAULT_REGION
});

dynamoose.aws.ddb.set(dynamoDBConfig);

