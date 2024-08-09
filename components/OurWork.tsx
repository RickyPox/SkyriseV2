
import PlusSign from "./PlusSign";
import WorkItem from "./WorkItem";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurWork(){

    const title=useRef(null)    
    const titleInView = useInView(title, { once: true });

    return(
        <div>
            <div className='gridLayout grid relative'>
                <motion.h1 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="col-start-2 col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">Our Work</motion.h1>
                <motion.p 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                    Nullam eget diam nec est facilisi faucibus. 
                    Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</motion.p>
                    <PlusSign/>
                    <PlusSign positon="right"/>
            </div>
            <div 
            className="gridLayout grid pt-[120px]">
                <WorkItem img="/Streamflow.png" href="https://x.com/streamflow_fi"></WorkItem>
                <WorkItem img="/Metaplex.png" href="https://x.com/metaplex"></WorkItem>
                <WorkItem img="/SolanaFoundation.png" href="https://x.com/SolanaFndn"></WorkItem>
                <WorkItem img="/Brave.png" href="https://x.com/brave"></WorkItem>
                <WorkItem img="/FlashTrade.png" href="https://x.com/FlashTrade_"></WorkItem>
                <WorkItem img="/Solayer.png" href="https://x.com/solayer_labs"></WorkItem>
                <WorkItem img="/Mtndao.png" href="https://x.com/mtndao"></WorkItem>
                <WorkItem img="/IslandDao.png" href="https://x.com/IslandDAOx"></WorkItem>
            </div>

            
        </div>
    )
}