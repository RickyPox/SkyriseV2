import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion";

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
        onMouseEnter={handleHover} onMouseLeave={handleHover} className={`relative col-span-full lg:col-span-4 2xl:col-span-3 flex items-center justify-center h-[210px] lg:h-[270px] border-[#FFFFFF] border-[1px]`}>
            <div className={`bg-gradient-to-r from-[#DAE8FA] to-[#FDFDFD] w-full h-full absolute top-0 -z-10 hoverTransition ${isHover ? "opacity-1" : "opacity-0"}`}></div>
            <img className={`w-[80%] max-w-[310px] sm:w-auto hoverTransition ${isHover ? "WorkItem-imageTransition opacity-100" : "opacity-20"}`} src={props.img}></img>
        </motion.div>
    )
}