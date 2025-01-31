import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SpotlightCard from "./SpotlightCard";

export default function OurWork(){

    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });

    const content=useRef(null)
    const contentInView = useInView(content, { once: true });

    const [isHovered, setIsHovered] = useState<number | null>(null)

    const clients =[
        {
            img:"SolanaFoundation.png",
            text:"[EVENT MANAGEMENT, MULTIMEDIA PRODUCTION, BRANDING, MARKETING PLANNING.]",
        },
        {
            img:"Brave.png",
            text:"[EVENT MANAGEMENT, MULTIMEDIA PRODUCTION, BRANDING, MARKETING PLANNING.]",
        },
        {
            img:"Mtndao.png",
            text:"[EVENT MANAGEMENT, MULTIMEDIA PRODUCTION, BRANDING, MARKETING PLANNING.]",
        }
]
    return(
        <div>
            <div className='gridLayout grid relative'>
            <motion.h2 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="text-center col-span-full">[PREVIOUS WORK]</motion.h2>
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
            ref={content} 
            initial={{ opacity:0, }}
            animate={ contentInView? { opacity:1,  } : {}} 
            transition={{ duration:0.5 }}
            className="gridLayout grid pt-[105px]">
                <div className="col-start-2 col-span-9 grid grid-cols-9 gap-x-[20px]">
                    {clients.map((client, i) =>(
                        <div key={i} className="col-span-3">
                            <SpotlightCard className="custom-spotlight-card " spotlightColor="rgba(239, 246, 254, 0.4)">
                                <div
                                    onMouseEnter={() => setIsHovered(i)}
                                    onMouseLeave={() => setIsHovered(null)} 
                                    className={`${isHovered === i ? "border-[#EFF6FE00] border-[1px]" : "border-[1px] border-[#EFF6FE]"}  hoverTransition flex flex-col gap-y-[10px] justify-center items-center w-full py-[24px]`}
                                >
                                    <div className="flex flex-col">
                                        <img className="px-[120px] h-[50px] object-contain" src={`/${client.img}`}/>
                                        <div className="h-[1px] bg-[#C8DDF8] mt-[25px] mb-[30px] mx-[90px]"/>
                                        <h2 className="px-[50px] text-center">{client.text}</h2>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </motion.div>

            
        </div>
    )
}