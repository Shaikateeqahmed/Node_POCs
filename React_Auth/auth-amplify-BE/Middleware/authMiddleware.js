const { CognitoJwtVerifier } = require("aws-jwt-verify");
const { CognitoIdentityProviderClient, GetUserCommand } = require("@aws-sdk/client-cognito-identity-provider");
require('dotenv').config();

// 1. Initialize the JWT Verifier
const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.userPoolId,
  tokenUse: "access", // We are expecting the Access Token
  clientId: process.env.clientId,
});

// 2. Initialize the Cognito Client to fetch user details
const cognitoClient = new CognitoIdentityProviderClient({ region: "eu-west-3" });

const tokenValidation = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided or invalid format" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // STEP 1: Verify the Access Token (Signature, Expiration, Audience)
    const payload = await verifier.verify(token);
    
    // STEP 2: Use the Access Token to get User Attributes from Cognito
    // Access tokens don't hold 'custom:userRole', so we ask Cognito for it.
    const command = new GetUserCommand({ AccessToken: token });
    const response = await cognitoClient.send(command);

    // STEP 3: Clean up the Cognito Attributes array into a simple object
    const attributes = response.UserAttributes.reduce((acc, attr) => {
      acc[attr.Name] = attr.Value;
      return acc;
    }, {});

    // STEP 4: Attach everything to the request object
    req.user = {
      username: payload.username,
      sub: payload.sub,
      email: attributes.email,
      role: attributes["custom:userRole"], // This is the role you mapped in Azure!
      allAttributes: attributes // Optional: in case you need other fields later
    };

    console.log(`User ${req.user.email} authenticated with role: ${req.user.role}`);
    
    next(); 
  } catch (err) {
    console.error("Authentication Error:", err.message);
    return res.status(401).json({ error: "Token is invalid or expired" });
  }
};

module.exports = tokenValidation;