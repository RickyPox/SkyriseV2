
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
        className="flex flex-col items-center relative overflow-hidden">
            <img className="min-w-[1250px] min-h-[1080px] -z-30" src="/LandingBg.png"></img>
            <div className="absolute mt-[330px] text-center flex flex-col justify-center items-center">
                <h1>Connecting Worlds</h1>
                <h3 className="text-[#C8DDF8]">Building bridges between Web3 and mainstream adoption</h3>
            </div>
            <div className="absolute mt-[560px]"><Button title="Get to know us" href="#about" color="#EFF6FE"></Button></div>
        </motion.div>

        </div>
    )
}