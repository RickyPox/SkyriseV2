import { useRef } from "react"
import { motion, useInView } from "framer-motion";
import PlusSign from "./PlusSign";

export default function About(){

    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });
  
    const content=useRef(null)
    const contentInView = useInView(content, { once: true });

    return(
        <div>
            <div className='gridLayout grid relative'>
                <motion.h1 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="col-start-2 col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-3 2xl:col-span-5 text-center mt-[35px]">About <br></br>SkyRise Labs</motion.h1>
                <motion.p
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">
                    The Growth and Acceleration segment of Skyrise.
                </motion.p>

                <PlusSign/>
                <PlusSign positon="right"/>
            </div>
            <motion.div
            ref={content} 
            initial={{ opacity:0, }}
            animate={ contentInView? { opacity:1,  } : {}} 
            transition={{ duration:0.5 }}
            className="gridLayout grid pt-[105px]">
                <div className="flex flex-col 2xl:col-start-2 2xl:col-span-2 sm:col-start-3 sm:col-span-4 col-start-1 col-span-full gap-[10px] 2xl:items-start items-center text-center 2xl:text-left mb-[50px] 2xl:mb-0">
                    <h2>What</h2>
                    <div className="w-[220px] h-[1px] bg-[#DAE8FA]"/>
                    <p>A leading growth accelerator helping Web3 projects navigate a tough landscape by providing expert strategies, user acquisition, and community building.</p>
                </div>

                <div className="flex flex-col 2xl:col-start-4 2xl:col-span-3 sm:col-start-3 sm:col-span-4 col-start-1 col-span-full 2xl:px-[95px] gap-[10px] text-center items-center mb-[50px] 2xl:mb-0">
                    <h2>Why</h2>
                    <div className="w-[220px] h-[1px] bg-[#DAE8FA]"/>
                    <p>We believe in the potential of Web3 to reshape the future. 
                    Our mission is to empower innovative projects to overcome the challenges of the space, build strong communities, and tell stories that connect with their audience, ensuring long-term success.</p>
                </div>

                <div className="flex flex-col 2xl:col-start-7 2xl:col-span-2 sm:col-start-3 sm:col-span-4 col-start-1 col-span-full gap-[10px] 2xl:items-end items-center text-center 2xl:text-right mb-[50px]  2xl:mb-0">
                    <h2>How</h2>
                    <div className="w-[220px] h-[1px] bg-[#DAE8FA]"/>
                    <p>Through empowering teams to navigate and thrive in the Web3 environment. By working with industry leaders, creating battle tested strategies & enabling brands to shape the future expertise and dedication to delivering exceptional results.</p>
                </div>
            </motion.div>

        </div>
    )
}