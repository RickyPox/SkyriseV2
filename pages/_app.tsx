import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <div>
      <Head>
        <title>SkyRiseLabs</title>
        <meta
          name="description"
          content="Leading Solana & Web3 growth agency driving mainstream adoption through strategic marketing, brand development, and event activation. Turn your vision into reality."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        
        {/* Open Graph / Facebook / Discord */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyriselabs.io/" />
        <meta property="og:title" content="SkyRiseLabs" />
        <meta
          property="og:description"
          content="Leading Solana & Web3 growth agency driving mainstream adoption through strategic marketing, brand development, and event activation. Turn your vision into reality."
        />
        <meta property="og:image" content="/MetaImage.png" />
        <meta property="theme-color" content="#C8DDF8" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://skyriselabs.io/" />
        <meta name="twitter:title" content="SkyRiseLabs" />
        <meta
          name="twitter:description"
          content="Leading Solana & Web3 growth agency driving mainstream adoption through strategic marketing, brand development, and event activation. Turn your vision into reality."
        />
        <meta name="twitter:image" content="/MetaImage.png" />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </div>
  );
}
