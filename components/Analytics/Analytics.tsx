import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-TV3NPFLG" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GTM-TV3NPFLG');
        `}
          </Script>
        </>
      )}
    </>
  );
}
