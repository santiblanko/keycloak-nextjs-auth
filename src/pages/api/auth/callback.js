import { setCookie } from 'nookies';

export default async function handler(
  req,
  res
) {

  const headers = req.headers;
  const host = headers.host;
  const env = process.env.NODE_ENV;
  const protocol = env == 'production' ? 'https' : 'http';

  const encodedParams = new URLSearchParams();
  encodedParams.set('grant_type', 'authorization_code');
  encodedParams.set('client_id', process.env.KEYCLOAK_CLIENT_ID);
  encodedParams.set('client_secret', process.env.KEYCLOAK_CLIENT_SECRET);
  encodedParams.set('code', String(req.query.code));
  encodedParams.set('redirect_uri', `${protocol}://${host}/api/auth/callback`);

  let url = `${process.env.KEYCLOAK_BASE_URL}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodedParams
  });

  const data = await response.json();

  setCookie({ res }, 'access_token', data.access_token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  });

  setCookie({ res }, 'refresh_token', data.refresh_token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  });

  setCookie({ res }, 'id_token', data.id_token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  });

  return res.redirect('/dashboard');
}
