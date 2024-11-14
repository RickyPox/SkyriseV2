import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Joblist from "./Jobs";
import { useLoading } from "./LoadingContext";
import Navbar from "./Navbar";
import OurNetwork from "./OurNetwork";
import OurServices from "./OurServices";
import OurWork from "./OurWork";
import Landing from "./Landing";

export default function WebsiteContent (){

    
  const { isLoading } = useLoading();
  
    return(
        <>
        {!isLoading &&
            <div>
              <section>
                <Navbar></Navbar>
              </section>
              <section>
                  <Landing></Landing>
                </section>
                <section className="pt-[400px]" id="About">
                  <About></About>
                </section>
                <section className="pt-[200px]" id="Work">
                  <OurWork></OurWork>
                </section>
                <section className="pt-[240px]" id="Services">
                  <OurServices></OurServices>
                </section>
                <section className="pt-[200px]" id="Joblist">
                  <Joblist></Joblist>
                </section>
                <section className="pt-[200px]" id="Network">
                  <OurNetwork></OurNetwork>
                </section>
                <section className="pt-[200px]" id="Contact">
                  <Contact></Contact>
                </section>
                <section className="pt-[140px] mb-[100px]">
                  <Footer></Footer>
                </section>
              </div> 
              }
              </>
    )
}