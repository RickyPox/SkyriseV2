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
              <section>
                <Navbar></Navbar>
              </section>
              <section className="relative">
                  <Landing></Landing>
                  <div className="absolute top-[50%] -translate-y-[50%] -translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>
                <section className="pt-[220px] relative" id="About">
                  <About></About>
                  <div className="absolute top-[50%] -translate-y-[50%] right-0 translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>
                <section className="pt-[250px] relative" id="Work">
                  <OurWork></OurWork>
                  <div className="absolute top-[50%] -translate-y-[50%] left-0 -translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>
                <section className="pt-[240px] relative" id="Services">
                  <OurServices></OurServices>
                  <div className="absolute top-[50%] -translate-y-[50%] right-0 translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>
                <section className="pt-[230px] relative" id="Contact">
                  <Contact></Contact>
                  
                </section>
                <section className="pt-[330px] mb-[100px] relative">
                  <Footer></Footer>
                  <div className="absolute -bottom-[100%] left-[50%] -translate-x-[50%] -z-20 pointer-events-none">
                    <Spotlight size="568"></Spotlight>
                  </div>
                </section>
              </div> 
              }
              </>
    )
}