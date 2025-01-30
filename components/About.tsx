import { useRef } from "react"
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";

export default function About(){

    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });
  
    const content=useRef(null)
    const contentInView = useInView(content, { once: true });

    

    return(
        <div>
            <div className='gridLayout grid relative'>
                <motion.h2 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="text-center col-span-full">[ABOUT]</motion.h2>
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
                    <div className="col-span-3">
                        <Counter title="[title]" total="5000"></Counter>
                    </div>
                    <div className="col-span-3">
                        <Counter title="[title]" total="5000"></Counter>
                    </div>
                    <div className="col-span-3">
                        <Counter title="[title]" total="5000"></Counter>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}