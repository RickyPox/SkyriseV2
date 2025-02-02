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
        <div>
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
                className="col-start-3 col-span-7 text-center">
                    Lorem ipsum dolor sit amet consectetur. Rutrum ultrices est ultrices tortor odio congue eget. Sed dictum fringilla nisl proin integer consectetur maecenas.
                </motion.h4>
            </div>

            <motion.div 
            ref={buttons}
            variants={container}
            initial="hidden"
            animate={buttonsInView ? "show" : "hidden"}
            className="flex lg:flex-row flex-col justify-center items-center gap-[30px] mt-[100px]">
                <Link href="#" target="_blank">
                    <motion.div variants={children}>
                        <Button color="#FDFDFD" title="Lorem Ipsum" size="big"/>
                    </motion.div>
                </Link>
            </motion.div>
        </div>
    )
}