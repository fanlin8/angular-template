interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  audience:string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '_Yar3zsMuyes5htv43b6MLqThj9tukug',
  domain: 'angelix.auth0.com',
  callbackURL: 'http://localhost:14200/main/callback',
  audience: 'https://spring.test.com/api/'
};
