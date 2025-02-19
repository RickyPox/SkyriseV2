
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeSlider from "./MarqueeSlider";
import Button from "./Button";

export default function Landing (){

    const view=useRef(null)
    const inView = useInView(view, { once: true });

    return(
        <div className="relative overflow-x-hidden h-screen flex flex-col">
            <motion.div 
                ref={view} 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}} 
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center h-full w-screen"
            >
                <div className="absolute top-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center gap-y-[20px]">
                    <h1>Connecting Worlds</h1>
                    <h3 className="text-[#C8DDF8]">Building bridges between Web3 and mainstream adoption</h3>
                </div>
                <div className="absolute top-[65%] -translate-y-1/2 text-center "> 
                    <Button title="Get to know us" href="#About" color="#EFF6FE"/>
                </div>
                <div className="mt-auto mb-[20px]">
                <MarqueeSlider></MarqueeSlider>
                <MarqueeSlider direction="right" reverse="true"></MarqueeSlider>
                </div>

            </motion.div>
        </div>

    )
}