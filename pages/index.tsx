// import { LoadingProvider } from "@/components/LoadingContext";
// import LoadingVideo from "@/components/LoadingVideo";
import WebsiteContent from "@/components/WebsiteContent";
import Head from "next/head";




export default function Home() {


  return (
    <div className="">
      <Head>
        <title>SKYRISE</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"/>

      </Head>
      {/* <LoadingProvider> */}
        {/* <LoadingVideo></LoadingVideo> */}
        <WebsiteContent></WebsiteContent>
      {/* </LoadingProvider> */}

    </div>
  )
}
