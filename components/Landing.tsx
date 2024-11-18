
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeSlider from "./MarqueeSlider";

export default function Landing (){

    const view=useRef(null)
    const inView = useInView(view, { once: true });

    return(
        <div>
        <motion.div ref={view} 
        initial={{ opacity:0}}
        animate={ inView? { opacity:1} : {}} 
        transition={{ duration:0.5 }}
        className="flex flex-col items-center justify-center relative">
            <img className="min-w-[1250px] overflow-hidden" src="/LandingBg.png"></img>
            <div className="absolute text-center">
                <h1>Connecting Ideas</h1>
                <p>Connecting and Growing Ideas - from 0 to 1.</p>
            </div>
        </motion.div>
        <div className="-mt-[140px] relative z-10">
            <MarqueeSlider></MarqueeSlider>
            </div>
        </div>
    )
}