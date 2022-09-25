# Keycloak + NextJS + Tailwind.

Check this [example](https://keycloak-nextjs-example-santiblanko.vercel.app).


In this example I create a project with next + keycloak authentication + tailwind installed. Ideal if you neeed a fast auth in your next project. 
You can use a free keycloak server like [cloud iam](https://www.cloud-iam.com/).

I don't want to use a library for manage auth. I try to implement auth with keycloak from sratch and this is the result.
I create a next middleware for intercept the auth pages and validate the token of protected pages.
Also I call this other endpoint for authenticate the request and keycloak call a callback endpoint with the tokens and then create cookies.

```
const signInUrl = `${props.KEYCLOAK_BASE_URL}/auth/realms/${props.KEYCLOAK_REALM}/protocol/openid-connect/auth?client_id=${props.KEYCLOAK_CLIENT_ID}&scope=openid%20profile%20email%20offline_access&response_type=code&redirect_uri=${props.KEYCLOAK_REDIRECT_URI}`;
```

If you need a keycloack theme with tailwind integrated see my other [repo](https://keycloak-nextjs-example-santiblanko.vercel.app).
If you want to add auth to a container check [my other implementation with oauth2proxy ](https://keycloak-nextjs-example-santiblanko.vercel.app).

Also I create a tailwindui theme for keycloak. check the [repo](https://github.com/santiblanko/tailwind-keycloak-theme).

## Env variables
```
KEYCLOAK_CLIENT_SECRET=wITlOh2V8bOGFKx3mD3RDk0nD1FNYb6Q
KEYCLOAK_CLIENT_ID=my-client
KEYCLOAK_BASE_URL=http://localhost:8080
KEYCLOAK_REALM=master
```

## Run.
```
yarn dev
```

If this implementation looks great you can share a beer using [patreon](https://patreon.com/santiblanko?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator) or send me bitcoins.

### Bitcoin direction: 
31p39e3AtdEv8T2aU9y9D1XH9Wc5HEtRte

I will be enormously grateful. :) Also I am available for capacitations, keycloak courses and projects!! 
<b>Whatsapp me +573233729549</b>
