import MarqueeSlider from "@/components/MarqueeSlider";
import Navbar from "@/components/Navbar";
import Ourwork from "@/components/Ourwork";
import Video from "@/components/Video";
import Head from "next/head";

export default function Home() {
  return (
    <div>
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
        <Ourwork></Ourwork>
      </section>
    </div>
  )
}
