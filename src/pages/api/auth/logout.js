import { setCookie } from 'nookies';
import axios from 'axios';

export default async function handler(req, res) {
  const { access_token } = req.cookies;
  const { id_token } = req.cookies;

  setCookie({ res }, 'access_token', null, {
    path: '/',
    maxAge: 0
  });

  setCookie({ res }, 'id_token', null, {
    path: '/',
    maxAge: 0
  });

  setCookie({ res }, 'refresh_token', null, {
    path: '/',
    maxAge: 0
  });

  if (id_token) {
    try {
      await axios.get(
        `${process.env.KEYCLOAK_BASE_URL}/auth/realms/${process.env
          .KEYCLOAK_REALM}/protocol/openid-connect/logout?id_token_hint=` +
          id_token
      );
    } catch (e) {
      console.log(e);
    }
  }

  return res.redirect('/');
}
