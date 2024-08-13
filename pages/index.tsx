import { LoadingProvider } from "@/components/LoadingContext";
import LoadingVideo from "@/components/LoadingVideo";
import WebsiteContent from "@/components/WebsiteContent";
import Head from "next/head";




export default function Home() {


  return (
    <div className="">
      <Head>
        <title>SkyRise</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"/>
        <meta name="description" content="Accelerating, Growing and Activating your favourite Web3 projects." />
        <meta property="og:title" content="SkyRiseLabs" />
        <meta property="og:description" content="Accelerating, Growing and Activating your favourite Web3 projects." />
        <meta property="og:image" content="/favicon.png" />
      </Head>
      <LoadingProvider>
        <LoadingVideo></LoadingVideo>
        <WebsiteContent></WebsiteContent>
      </LoadingProvider>

    </div>
  )
}
