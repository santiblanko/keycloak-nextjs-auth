import { NextResponse } from 'next/server';

async function validateUser(id_token) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  var urlencoded = new URLSearchParams();
  urlencoded.append('client_secret', process.env.KEYCLOAK_CLIENT_SECRET);
  urlencoded.append('client_id', process.env.KEYCLOAK_CLIENT_ID);
  urlencoded.append('token', id_token);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.KEYCLOAK_BASE_URL}/auth/realms/${process.env
        .KEYCLOAK_REALM}/protocol/openid-connect/token/introspect`,
      requestOptions
    )
      .then(response => resolve(response.text()))
      .catch(error => reject(error));
  });
}

export async function middleware(request) {

  const access_token = request.cookies.get('access_token');
  const id_token = request.cookies.get('id_token');

  let user;

  try {
    user = await validateUser(id_token);
    user = JSON.parse(user);
  } catch (e) {
    console.log('Error on validate user:', e);
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
    if (user.active) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (user.active) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/api/auth/logout/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|static|_next|favicon.ico).*)']
};
