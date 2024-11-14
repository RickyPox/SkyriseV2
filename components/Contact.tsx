import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion";
import Button from "./Button";
import PlusSign from "./PlusSign";
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
            <div className='gridLayout grid pb-[120px] relative'>
                <motion.h1 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="col-start-2 col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center mt-[35px]">Contact Us</motion.h1>
                <motion.p 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">
                Your direct line to our team. We're ready to listen, understand your challenges, and provide expert guidance.
                </motion.p>
                <PlusSign/>
                <PlusSign positon="right"/>
            </div>

            <motion.div 
            ref={buttons}
            variants={container}
            initial="hidden"
            animate={buttonsInView ? "show" : "hidden"}
            className="flex lg:flex-row flex-col justify-center items-center gap-[30px]">
                <Link href="https://drive.google.com/drive/folders/1qwPKtz7bmp5hQjGnCoTPK4ionhNPAAlX?usp=sharing" target="_blank"><motion.div variants={children}><Button color="#FDFDFD" title="Download Deck" size="big"></Button></motion.div></Link>
                <Link href="https://t.me/xicosr"><motion.div variants={children}><Button color="#FDFDFD" title="Talk to us" size="big"></Button></motion.div></Link>
                {/* <motion.div variants={children}><Button color="#FDFDFD" title="Schedule A Meeting" size="big"></Button></motion.div> */}
            </motion.div>
        </div>
    )
}