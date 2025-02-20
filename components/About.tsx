import { useRef } from "react"
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";

export default function About(){

    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });
  
    const content=useRef(null)
    const contentInView = useInView(content, { once: true });

    

    return(
        <div className="max-w-[1920px]">
            <div className='gridLayout grid relative'>
                <motion.h2 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="text-center col-span-full">[ABOUT]</motion.h2>
                <motion.h4
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="xl:col-start-3 xl:col-span-7 col-start-1 col-span-full text-center">
                    We empower Web3's brightest projects with the tools, strategies, and connections needed to drive lasting mainstream adoption. Through strategic growth, creative excellence, and deep ecosystem expertise, we're building the bridges that Web3 needs to go mainstream.
                </motion.h4>
            </div>
            <motion.div
            ref={content} 
            initial={{ opacity:0, }}
            animate={ contentInView? { opacity:1,  } : {}} 
            transition={{ duration:0.5 }}
            className="gridLayout grid pt-[105px]">
                <div className="xl:col-start-2 xl:col-span-9 xl:grid xl:grid-cols-9 lg:col-start-3 lg:col-span-4 sm:col-start-2 sm:col-span-4 col-span-full flex flex-col xl:gap-x-[20px] xl:gap-y-0 gap-y-[50px]">
                    <div className="xl:col-span-3 col-span-full" >
                        <Counter title="[Total Impressions]" total={10} delay={0} after="M"></Counter>
                    </div> 
                    <div className="xl:col-span-3 col-span-full">
                        <Counter title="[Revenue Generated]" total={10} delay={1} before="$" after="M"></Counter>
                    </div>
                    <div className="xl:col-span-3 col-span-full">
                        <Counter title="[Projects Accelerated]" total={100} delay={2}></Counter>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}