import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
  <title>SkyRiseLabs</title>
  <meta name="description" content="Leading Solana & Web3 growth agency driving mainstream adoption through strategic marketing, brand development, and event activation. Turn your vision into reality." />
  
  {/* Open Graph / Facebook / Discord */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://skyriselabs.io/" />
  <meta property="og:title" content="SkyRiseLabs" />
  <meta property="og:description" content="Leading Solana & Web3 growth agency driving mainstream adoption through strategic marketing, brand development, and event activation. Turn your vision into reality." />
  <meta property="og:image" content="/MetaImage.png" />

  <meta property="theme-color" content="#C8DDF8" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://skyriselabs.io/" />
  <meta name="twitter:title" content="SkyRiseLabs" />
  <meta name="twitter:description" content="Leading Solana & Web3 growth agency driving mainstream adoption through strategic marketing, brand development, and event activation. Turn your vision into reality." />
  <meta name="twitter:image" content="/MetaImage.png" />
</Head>
    <Component {...pageProps}/>
    </div>
  ) 
}
