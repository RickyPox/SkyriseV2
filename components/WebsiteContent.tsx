import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { useLoading } from "./LoadingContext";
import Navbar from "./Navbar";
import OurServices from "./OurServices";
import OurWork from "./OurWork";
import Landing from "./Landing";
import Spotlight from "./Spotlight";

export default function WebsiteContent (){

    
  const { isLoading } = useLoading();
  
    return(
        <>
        {!isLoading &&
            <div>
              <section className="relative">
                <Navbar></Navbar>
              </section>

              <section className="relative">
                  <div className="flex flex-col items-center">
                    <Landing></Landing>
                  </div>
                  <div className="absolute top-[50%] -translate-y-[50%] -translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>

                <section className="pt-[220px] relative" id="About">
                  <div className="flex flex-col items-center">
                    <About></About>
                  </div>
                  <div className="absolute top-[50%] -translate-y-[50%] right-0 translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>

                <section className="pt-[250px] relative" id="Work">
                  <div className="flex flex-col items-center">
                    <OurWork></OurWork>
                  </div>
                  <div className="absolute top-[50%] -translate-y-[50%] left-0 -translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>

                <section className="pt-[240px] relative" id="Services">
                  <div className="flex flex-col items-center">
                    <OurServices></OurServices>
                  </div>
                  <div className="absolute top-[50%] -translate-y-[50%] right-0 translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>

                <section className="pt-[230px] relative" id="Contact">
                  <div className="flex flex-col items-center">
                    <Contact></Contact>
                  </div>
                </section>

                <section className="pt-[330px] pb-[100px] relative overflow-y-hidden ">
                  <div className="flex justify-center">
                    <Footer></Footer>
                  </div>
                  <div className="absolute -bottom-[160%] left-[50%] -translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>
              </div> 
              }
              </>
    )
}