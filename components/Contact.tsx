import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion";
import Button from "./Button";

import Link from "next/link";

export default function Contact (){

    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });

    const buttons=useRef(null)
    const buttonsInView = useInView(buttons, { once: true });


    const container = {
        hidden: { opacity:0,  },

        show: { 
            opacity:1, 
            
            transition: { duration:0.5, staggerChildren:0.1, delayChildren:0.3 }
        },
    };

    const children = {
        hidden: {opacity:0, },
        show:{ opacity:1,  }
    }

    return(
        <div className="max-w-[1920px]">
            <div className='gridLayout grid relative'>
                <motion.h2 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="text-center col-span-full">[CONTACT US]</motion.h2>
                <motion.h4
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="xl:col-start-3 xl:col-span-7 col-start-1 col-span-full text-center">
                    Whether you’re looking to launch, scale, or transform your Web3 project, we can help turn your vision into reality.
                </motion.h4>
            </div>

            <motion.div 
            ref={buttons}
            variants={container}
            initial="hidden"
            animate={buttonsInView ? "show" : "hidden"}
            className="flex lg:flex-row flex-col justify-center items-center gap-[30px] mt-[100px]">
                    <motion.div variants={children}>
                        <Button color="#EFF6FE" title="Get in Touch" href="mailto:jonah@skyriselabs.io"/>
                    </motion.div>

            </motion.div>
        </div>
    )
}