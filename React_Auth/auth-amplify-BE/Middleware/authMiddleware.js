const { CognitoJwtVerifier } = require("aws-jwt-verify");
require('dotenv').config();

// Initialize the verifier
const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.userPoolId,
  tokenUse: "access", // We are expecting the Access Token
  clientId: process.env.clientId,
});

const tokenValidation = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided or invalid format" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // This checks the signature, expiration, and audience (client ID)
    const payload = await verifier.verify(token);
    console.log(payload)
    // Attach the user info to the request object so you can use it in your routes
    req.user = payload; 
    
    next(); // Token is valid, proceed to the endpoint
  } catch (err) {
    console.error("Token validation failed:", err.message);
    return res.status(401).json({ error: "Token is invalid or expired" });
  }
};

module.exports = tokenValidation;