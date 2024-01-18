import MarqueeSlider from "@/components/MarqueeSlider";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import Video from "@/components/Video";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SkyRise</title>
      </Head>
      <section className="my-[60px] ml-[100px]">
        <Navbar></Navbar>
      </section>
      <section>
        <Video></Video>
      </section>
      <section>
        <MarqueeSlider></MarqueeSlider>
      </section>
      <section className="mt-[320px]">

      </section>
      <section className="mt-[320px]">
        <OurServices></OurServices>
      </section>
    </div>
  )
}
