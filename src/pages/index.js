import Header from '../components/header'
import Prices from '../components/prices'

Example.getInitialProps = async ({ req, res }) => {
  const headers = req.headers;
  const host = headers.host;
  const env = process.env.NODE_ENV;
  const protocol = env == 'production' ? 'https' : 'http';

  const KEYCLOAK_BASE_URL = process.env.KEYCLOAK_BASE_URL
  const KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID
  const KEYCLOAK_REALM = process.env.KEYCLOAK_REALM
  const KEYCLOAK_REDIRECT_URI = `${protocol}://${host}/api/auth/callback`;

  return {
    props: {
      KEYCLOAK_BASE_URL,
      KEYCLOAK_CLIENT_ID,
      KEYCLOAK_REALM,
      KEYCLOAK_REDIRECT_URI
    }
  };
};


export default function Example({props}) {
  return (
    <div>
      <Header {...props} />
      <Prices/>
    </div>
  )
}