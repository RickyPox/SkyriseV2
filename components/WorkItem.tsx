import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function WorkItem(props:any){
    
    const view=useRef(null)
    const inView = useInView(view, { once: true });

    const [isHover, setIsHover]=useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    
    
    return(
        <motion.div 
        ref={view}
        initial={{ opacity:0, }}
        animate={ inView ? { opacity:1,  } : {}} 
        transition={{ duration:0.5 }}
        onMouseEnter={handleHover} onMouseLeave={handleHover} className={`relative col-span-full lg:col-span-4 2xl:col-span-3 flex items-center justify-center h-[210px] lg:h-[270px] lg: border-[#FFFFFF] border-[1px]`}>
            <Link href={props.href ? props.href : "#"} target="_blank" className={`bg-gradient-to-r from-[#DAE8FA] to-[#FDFDFD] w-full h-full absolute top-0 z-10 hoverTransition ${isHover ? "opacity-1" : "2xl:opacity-0 opacity-100"}`}></Link>
            <img className={`w-[60%] max-w-[310px] sm:w-auto hoverTransition pointer-events-none z-20 WorkItem-imageTransition ${isHover ? "WorkItem-imageTransitionBlack opacity-100" : "2xl:opacity-20 opacity-100"}`} src={props.img}></img>
        </motion.div>
    )
}