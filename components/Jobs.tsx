
import Link from "next/link";
import PlusSign from "./PlusSign";
import WorkItem from "./WorkItem";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Joblist(){

    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });

    const jobs=useRef(null)
    const jobsInView = useInView(jobs, { once: true });

    const [isHover, setIsHover]=useState(null)

    const handleMouseEnter = (index:any) => {
        setIsHover(index);
    };

    const handleMouseLeave = () => {
        setIsHover(null);
    };    

    const joblist = [
        {
            title:"Web3 Social Media Expert",
            description:"Focused on X, Telegram, and key Web3 channels to drive engagement and community growth through strategic content.",
            href:"#",
        },
        {
            title:"Senior Web3 Community Manager",
            description:"Leads decentralized communities, enhancing engagement and brand presence in Web3 ecosystems.",
            href:"#",
        },
]


    return(
        <div>
            <div className='gridLayout grid relative'>
                <motion.h1 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="col-start-2 col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">Our Job list</motion.h1>
                <motion.p 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">
                We are helping brands navigate and thrive. If you're a forward-thinking marketer, strategist, or content creator with a deep understanding of Web3, we want you on our team.
                </motion.p>
                <PlusSign/>
                <PlusSign positon="right"/>
            </div>
            <div 
            className="gridLayout grid pt-[50px] sm:pt-[80px] 2xl:pt-[140px]">
                <motion.div 
                ref={jobs}
                initial={{ opacity:0, }}
                animate={ jobsInView ? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }} className="col-span-full flex 2xl:flex-row flex-col items-center justify-center gap-[20px]">
                    {joblist.map((job, i)=>(
                        <div key={i}  onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave} className={`relative p-[30px]  2xl:w-1/3 w-1/2 items-center justify-center border-[#FFFFFF] border-[1px]`}>
                            <div className={`bg-gradient-to-r from-[#DAE8FA] to-[#FDFDFD] w-full h-full absolute left-0 top-0 -z-10 hoverTransition ${isHover === i ? "opacity-1" : "opacity-0"}`}/>
                            <h2 className={`${isHover === i ? "text-[#050505]" : " "} hoverTransition `}>{job.title}</h2> 
                            <p className={`mt-[5px] ${isHover === i ? " text-[#050505]" : ""} hoverTransition`}>{job.description}</p>
                            <div className="flex justify-end mt-[30px] ">
                                <Link href={job.href}><p className={`${isHover === i ? "border-[#050505]" : "border-[#FFFFFF]"} hoverTransition bg-[#050505] border-[1px] py-[10px] px-[40px]`}>Apply Here</p></Link>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            
        </div>
    )
}