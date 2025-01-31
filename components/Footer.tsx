
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Footer(){

    const view=useRef(null)
    const inView = useInView(view, { once: true });


    return(
        <motion.div 
        ref={view} 
        initial={{ opacity:0, }}
        animate={ inView? { opacity:1,  } : {}} 
        transition={{ duration:0.5 }}
        className="gridLayout 2xl:grid block">
            <div className="col-start-2 col-span-9 h-[1px] bg-[#FDFDFD] hidden 2xl:block"/>
            <div className="col-start-2 col-span-9 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:px-[30px] 2xl:px-0">
                <Link href="#"><h2 className="text-[#EFF6FE]">SKYRISE©</h2></Link>
                <div className="flex gap-x-[35px]">
                    <Link href="#"><img src="/Insta.png" alt="InstaLogo"/></Link>
                    <Link href="#"><img src="/Twitter.png" alt="TwitterLogo"/></Link>
                    <Link href="#"><img src="/TikTok.png" alt="TikTokLogo"/></Link>
                </div>
            </div>
        </motion.div>
    )
}