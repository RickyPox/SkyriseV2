
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Footer(){

    const view=useRef(null)
    const inView = useInView(view, { once: true });


    return(
        <motion.div 
        ref={view} 
        initial={{ opacity:0, scale:0}}
        animate={ inView? { opacity:1, scale:1 } : {}} 
        transition={{ duration:0.5 }}
        className="gridLayout 2xl:grid block">
            <div className="col-start-3 col-span-5 h-[1px] bg-[#FDFDFD] hidden 2xl:block"/>
            <div className="col-start-3 col-span-5 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:px-[30px] 2xl:px-0">
                <Link href="#"><p className="nav">SKYRISELABS.IO</p></Link>
                <Link href="https://twitter.com/SkyRiseLabs" target="_blank"><p className="nav">@SKYRISELABS</p></Link>
            </div>
        </motion.div>
    )
}