const dynamoose = require("dynamoose");
require('dotenv').config();

// For production: Dynamoose automatically uses IAM roles if available.
// To manually set credentials:
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY
    },
    "region": process.env.AWS_DEFAULT_REGION
});
dynamoose.aws.ddb.set(ddb);

// For Local Testing (defaults to http://localhost:8000)
// dynamoose.aws.ddb.local(); 
