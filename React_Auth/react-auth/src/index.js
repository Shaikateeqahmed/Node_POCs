// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://eu-west-3pm9wvwi0x.auth.eu-west-3.amazoncognito.com",
  client_id: "6glpmh0utv4cl0ndctt0539m5c",
  redirect_uri: "http://localhost:3000/",
  response_type: "code",
  scope: "email openid phone",

  code_challenge_method: "S256",
    metadata: {
    issuer: "https://eu-west-3pm9wvwi0x.auth.eu-west-3.amazoncognito.com",
    authorization_endpoint:
      "https://eu-west-3pm9wvwi0x.auth.eu-west-3.amazoncognito.com/oauth2/authorize",
    token_endpoint:
      "https://eu-west-3pm9wvwi0x.auth.eu-west-3.amazoncognito.com/oauth2/token",
    userinfo_endpoint:
      "https://eu-west-3pm9wvwi0x.auth.eu-west-3.amazoncognito.com/oauth2/userInfo",
    end_session_endpoint:
      "https://eu-west-3pm9wvwi0x.auth.eu-west-3.amazoncognito.com/logout",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// wrap the application with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);