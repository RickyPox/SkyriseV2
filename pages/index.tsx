import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurNetwork from "@/components/OurNetwork";
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
      <section className="my-[60px]">
        <Navbar></Navbar>
      </section>
     <section>
      <Video></Video>
    </section>
    <section className="mt-[200px]">
      <OurWork></OurWork>
    </section>
   <section className="mt-[240px]">
      <OurServices></OurServices>
    </section>
    <section className="mt-[200px]">
      <OurNetwork></OurNetwork>
    </section>
     <section className="mt-[200px]">
      <Contact></Contact>
    </section>
    <section className="mt-[140px] mb-[100px]">
      <Footer></Footer>
    </section>  
    </div>
  )
}
