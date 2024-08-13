import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="description" content="Accelerating, Growing and Activating your favourite Web3 projects." />
        <meta property="og:title" content="SkyRiseLabs" />
        <meta property="og:description" content="Accelerating, Growing and Activating your favourite Web3 projects." />
        <meta property="og:image" content="/favicon.png" />
      </Head>
    <Component {...pageProps}/>
    </div>
  ) 
}
