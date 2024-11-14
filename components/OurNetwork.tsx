import MarqueeSlider from "./MarqueeSlider";
import PlusSign from "./PlusSign";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"

export default function OurNetwork(){

    
    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });


    return(
        <div>
            <div className='gridLayout grid pb-[120px] relative'>
                <motion.h1 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="col-start-1 col-span-full text-center mt-[35px]">Our Network</motion.h1>
                <motion.p 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">
                    A glimpse into our collaborative ecosystem, highlighting strategic partnerships and shared values that fuel innovation.
                </motion.p>
                <PlusSign/>
                <PlusSign positon="right"/>
            </div>
            <motion.div
            
            >
                <MarqueeSlider></MarqueeSlider>
                <MarqueeSlider direction="right"></MarqueeSlider>
                <MarqueeSlider></MarqueeSlider>
                <MarqueeSlider direction="right"></MarqueeSlider>
            </motion.div>
        </div>
    )
}