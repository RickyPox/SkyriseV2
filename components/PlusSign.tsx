
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PlusSign(props:any){
    
    const view=useRef(null)
    const inView = useInView(view, { once: true });

    return(
        <motion.div 
        ref={view} 
        initial={{ opacity:0, }}
        animate={ inView? { opacity:1,  } : {}} 
        transition={{ duration:0.5 }}
        className="blink absolute top-0" style={props.positon === "right" ? {right:0} : {left:0}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9785 25L11.9785 0L13.0202 4.55327e-08L13.0202 25L11.9785 25Z" fill="#FDFDFD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 13.021L0 13.021L-4.55327e-08 11.9793L25 11.9793L25 13.021Z" fill="#FDFDFD"/>
            </svg>
        </motion.div>
    )
}