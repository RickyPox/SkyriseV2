import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import PlusSign from "./PlusSign";

interface ServiceContainerProps {
  index: number;
}

const ServiceContainer = styled.div<ServiceContainerProps>`

  @media (min-width: 1536px) {
    ${({ index }) => index % 2 === 0 ? `
      grid-column-start: 2;
    ` : `
      grid-column-start: 6;
    `}
  }
`;

export default function OurServices(){

  const [hoverIndex, setHoverIndex] = useState(null);

  
  const handleMouseEnter = (index:any) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  const services = [
    {
      title:"Growth & User Acquisition",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
    {
      title:"Brand & Design",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
    {
      title:"Community Building",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
    {
      title:"Story Telling",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
  ]

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
          className="col-start-2 col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">Our Services</motion.h1>
            <motion.p
            ref={title} 
            initial={{ opacity:0, }}
            animate={ titleInView? { opacity:1,  } : {}} 
            transition={{ duration:0.5, delay:0.2 }}
            className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">
              Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
              Nullam eget diam nec est facilisi faucibus. 
              Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.
            </motion.p>

            <PlusSign/>
            <PlusSign positon="right"/>

        </div>
        <motion.div 
          ref={content} 
          initial={{ opacity:0, }}
          animate={ contentInView ? { opacity:1,  } : {}} 
          transition={{ duration:0.5 }}
        className="gridLayout pt-[120px] flex flex-col 425:grid">
          {services.map((item, i) =>(
              <ServiceContainer
              index={i}  
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave} key={i} className={` flex flex-col gap-[10px] items-center justify-center mb-[60px] text-center col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-span-3`}>
                  <div className={`w-[30px] h-[30px] rounded-full flex items-center justify-center border-[#FDFDFD] border-[1px] hoverTransition ${hoverIndex === i ? "bg-[#FDFDFD] text-[#050505]" : ""}`}>
                    <p>0{i+1}</p>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
              </ServiceContainer>
          ))}
        </motion.div>
    </div>
  )
}