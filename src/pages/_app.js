import '../styles/global.css'
import LogRocket from 'logrocket';
LogRocket.init('kemzwu/popo');
import Script from 'next/script'


export default function MyApp({ Component, pageProps }) {
  return (
 <div>
      <Component {...pageProps} />
      <Script strategy="afterInteractive" src="https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.0.1/src/glowCookies.min.js" />

<Script
  strategy="lazyOnload"
 src="https://www.googletagmanager.com/gtag/js?id=G-W6QZ44FM18"/>

<Script
  id="google-analytics"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W6QZ44FM18');
  `
  }}
/>

  </div>
  )
}
