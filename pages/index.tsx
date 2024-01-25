import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeSlider from "@/components/MarqueeSlider";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
import ServicesModal from "@/components/ServicesModal";
import Skyrise from "@/components/Skyrise";
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
        <Skyrise></Skyrise>
      </section>
     <section>
      <Video></Video>
    </section>
    <section>
      <MarqueeSlider></MarqueeSlider>
    </section>
    <section className="mt-[320px] ">
      <OurWork></OurWork>
    </section>
   <section className="mt-[320px] relative">
      <OurServices></OurServices>
      
    </section>
     <section className="mt-[300px] lg:mx-[100px] mx-[30px]">
      <Contact></Contact>
    </section>
    <section className="mt-[150px] lg:mx-[100px] mx-[30px]">
      <Footer></Footer>
    </section>  
    </div>
  )
}
