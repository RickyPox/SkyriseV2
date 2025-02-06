
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
        className="gridLayout grid w-full max-w-[1920px]">
            <div className="col-start-2 col-span-9 h-[1px] bg-[#FDFDFD] block"/>
            <div className="col-start-2 col-span-9 flex  flex-row items-start justify-between ">
                <Link href="#"><h2 className="text-[#EFF6FE]">SKYRISE©</h2></Link>
                <div className="flex gap-x-[35px]">
                    <Link href="https://www.instagram.com/skyriselabs/" target="_blank"><img src="/Insta.png" alt="InstaLogo"/></Link>
                    <Link href="https://x.com/SkyRiseLabs" target="_blank"><img src="/Twitter.png" alt="TwitterLogo"/></Link>
                    <Link href="https://www.tiktok.com/@skyrisestudios" target="_blank"><img src="/TikTok.png" alt="TikTokLogo"/></Link>
                </div>
            </div>
        </motion.div>
    )
}