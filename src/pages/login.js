import React, { useEffect } from "react";
import Button from '@mui/material/Button';

export default function Home() {

  const signInUrl = `http://localhost:8080/auth/realms/master/protocol/openid-connect/auth?client_id=my-client&scope=openid%20profile%20email%20offline_access&response_type=code&redirect_uri=http://localhost:3000/api/auth/callback`;

  useEffect(() => {
    window.location = signInUrl;
  })


return (
    <>
    </>
  )
}

