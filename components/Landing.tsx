
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
                <img className="absolute h-full object-cover" src="/Landing.png"></img>
                <div className="absolute bg-gradient-to-r from-[#05050500] to-[#050505] left-0 top-0 h-full w-1/2 -z-20"/>
                <div className="absolute bg-gradient-to-l from-[#05050500] to-[#050505] right-0 top-0 h-full w-1/2 -z-20"/>
                <div className="absolute lg:top-1/2 top-[50%] -translate-y-1/2 text-center flex flex-col justify-center items-center gap-y-[20px] ">
                    <h1>Connecting Worlds</h1>
                    <h3 className="text-[#C8DDF8]">Building bridges between Web3 and mainstream adoption</h3>
                    <div className="mt-[60px]"> 
                    <Button title="Get to know us" href="#About" color="#EFF6FE"/>
                </div>
                </div>
                
                <div className="mt-auto mb-[3vh] z-20">
                    <MarqueeSlider></MarqueeSlider>
                    <MarqueeSlider direction="right" reverse="true"></MarqueeSlider>
                </div>

            </motion.div>
        </div>

    )
}