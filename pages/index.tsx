import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeSlider from "@/components/MarqueeSlider";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
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
        <OurWork></OurWork>
      </section>
      <section className="mt-[320px]">
        <OurServices></OurServices>
      </section>
      <section>
        <Contact></Contact>
      </section>
      <section className="mt-[150px]">
        <Footer></Footer>
      </section>
    </div>
  )
}
