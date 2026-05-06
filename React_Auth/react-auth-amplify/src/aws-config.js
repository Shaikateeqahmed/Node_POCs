const awsConfig = {
  Auth: {
    Cognito: {
      region: "eu-west-3",
      userPoolId: "eu-west-3_nH00K2CIW",
      userPoolClientId: "305rf1fum8u33s5r4ursobbbut",
      loginWith: {
        oauth: {
          domain: "eu-west-3nh00k2ciw.auth.eu-west-3.amazoncognito.com",
          scopes: ["email", "openid", "profile", "aws.cognito.signin.user.admin"],
          redirectSignIn: ["http://localhost:3000/"],
          redirectSignOut: ["http://localhost:3000/"],
          responseType: "code",
        },
      },
    },
  },
};

export default awsConfig;