
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Video (){

    const view=useRef(null)
    const inView = useInView(view, { once: true });

    return(
        <motion.div ref={view} 
        initial={{ opacity:0, scale:0}}
        animate={ inView? { opacity:1, scale:1 } : {}} 
        transition={{ duration:0.5 }}
        className="bg-[#151515] flex justify-center lg:items-center items-end h-[800px] py-[30px]">
            <div>
                
            </div>
        </motion.div>
    )
}