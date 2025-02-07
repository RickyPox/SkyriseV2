
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeSlider from "./MarqueeSlider";
import Button from "./Button";

export default function Landing (){

    const view=useRef(null)
    const inView = useInView(view, { once: true });

    return(
        <div className="relative max-w-[1920px]">
        <motion.div ref={view} 
        initial={{ opacity:0}}
        animate={ inView? { opacity:1} : {}} 
        transition={{ duration:0.5 }}
        className="flex flex-col items-center justify-center relative overflow-hidden">
            <img className="min-w-[1250px] min-h-[700px] -z-30" src="/LandingBg.png"></img>
            <div className="absolute text-center flex flex-col justify-center items-center">
                <h1>Connecting Ideas</h1>
                <h3 className="text-[#C8DDF8]">Building bridges between Web3 and mainstream adoption</h3>
            </div>
            <div className="absolute top-[62%]"><Button title="Get To Know Us" href="mailto:jonah@skyriselabs.io" color="#EFF6FE"></Button></div>
        </motion.div>

        </div>
    )
}