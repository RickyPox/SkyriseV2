
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
            <img className="min-w-[1250px]" src="/LandingBg.png"></img>
            <div className="absolute text-center flex flex-col justify-center items-center">
                <h1>Connecting Ideas</h1>
                <h3 className="text-[#C8DDF8]">Connecting and Growing Ideas - from 0 to 1.</h3>
            </div>
            <div>
                <Button title="Get To Know Us"></Button>
            </div>
        </motion.div>
        <div className="-mt-[140px] relative z-10">
            <MarqueeSlider></MarqueeSlider>
            </div>
        </div>
    )
}