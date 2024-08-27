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
                className="col-start-2 col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">About</motion.h1>
                <motion.p
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">
                    Skyrise  Labs is the Growth and Acceleration segment of Skyrise.
                </motion.p>

                <PlusSign/>
                <PlusSign positon="right"/>
            </div>
            <motion.div
            ref={content} 
            initial={{ opacity:0, }}
            animate={ contentInView? { opacity:1,  } : {}} 
            transition={{ duration:0.5 }}
            className="gridLayout grid pt-[150px]">
                <div className="flex flex-col 2xl:col-start-2 2xl:col-span-2 sm:col-start-3 sm:col-span-4 col-start-1 col-span-full gap-[10px] 2xl:items-start items-center text-center 2xl:text-left mb-[50px] 2xl:mb-0">
                    <h2>What</h2>
                    <div className="w-[220px] h-[1px] bg-[#DAE8FA]"/>
                    <p>Skyrise Labs is the Skyrise segment responsible for Growth and Accelaration on each project, offering services such as marketing, branding, storytelling, etc.</p>
                </div>

                <div className="flex flex-col 2xl:col-start-4 2xl:col-span-3 sm:col-start-3 sm:col-span-4 col-start-1 col-span-full 2xl:px-[95px] gap-[10px] text-center items-center mb-[50px] 2xl:mb-0">
                    <h2>Why</h2>
                    <div className="w-[220px] h-[1px] bg-[#DAE8FA]"/>
                    <p>Skyrise Labs is created due to the lack of education, knowledge and access to web3 resources related to marketing, branding and communication overall, aiming to offer them to its clients.</p>
                </div>

                <div className="flex flex-col 2xl:col-start-7 2xl:col-span-2 sm:col-start-3 sm:col-span-4 col-start-1 col-span-full gap-[10px] 2xl:items-end items-center text-center 2xl:text-right mb-[50px]  2xl:mb-0">
                    <h2>How</h2>
                    <div className="w-[220px] h-[1px] bg-[#DAE8FA]"/>
                    <p>Through empowering teams to navigate and thrive in the Web3 environment. By working with industry leaders, creating battle tested strategies & enabling brands to shape the future expertise and dedication to delivering exceptional results.</p>
                </div>
            </motion.div>
            
            <motion.div 
            ref={content} 
            initial={{ opacity:0, }}
            animate={ contentInView? { opacity:1,  } : {}} 
            transition={{ duration:0.5 }}
            className="w-full bg-gradient-to-r from-[#DAE8FA] to-[#FDFDFD] relative mt-[50px]">
                <h1 className="2xl:text-[90px] lg:text-[75px] sm:text-[60px] text-[30px] font-[600] text-[#050505] py-[130px] sm:py-[115px] lg:py-[100px] text-center">Elevate your vision</h1>
                    <div
                    className="absolute top-0 sm:p-[60px] py-[60px] px-[25px]">
                        <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9785 25L11.9785 0L13.0202 4.55327e-08L13.0202 25L11.9785 25Z" fill="#000000"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 13.021L0 13.021L-4.55327e-08 11.9793L25 11.9793L25 13.021Z" fill="#000000"/>
                        </svg>
                    </div>
                    <div
                    className="absolute top-0 right-0 sm:p-[60px] py-[60px] px-[25px]">
                        <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9785 25L11.9785 0L13.0202 4.55327e-08L13.0202 25L11.9785 25Z" fill="#000000"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 13.021L0 13.021L-4.55327e-08 11.9793L25 11.9793L25 13.021Z" fill="#000000"/>
                        </svg>
                    </div>
                    <div
                    className="absolute bottom-0 sm:p-[60px] py-[60px] px-[25px]">
                        <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9785 25L11.9785 0L13.0202 4.55327e-08L13.0202 25L11.9785 25Z" fill="#000000"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 13.021L0 13.021L-4.55327e-08 11.9793L25 11.9793L25 13.021Z" fill="#000000"/>
                        </svg>
                    </div>
                    <div
                    className="absolute bottom-0 right-0 sm:p-[60px] py-[60px] px-[25px]">
                        <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9785 25L11.9785 0L13.0202 4.55327e-08L13.0202 25L11.9785 25Z" fill="#000000"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 13.021L0 13.021L-4.55327e-08 11.9793L25 11.9793L25 13.021Z" fill="#000000"/>
                        </svg>
                    </div>
            </motion.div>

        </div>
    )
}