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
      text:"Our primary focus is, on driving growth by implementing strategies to attract and retain customers. Through the use of data driven insights and innovative marketing methods we ensure that your business expands efficiently and successfully."    },
    {
      title:"Brand & Design",
      text:"Developing a captivating brand identity is central to our work. Our team specializes in designing visuals that not grab attention but also effectively convey your brands value creating a memorable impression on your target audience."    },
    {
      title:"Community Building",
      text:"Establishing a community is crucial for sustained success. We assist in nurturing connections with your audience transforming followers into dedicated advocates who genuinely support your brand."
    },
    {
      title:"Storytelling",
      text:"We strongly believe in the impact of storytelling to form connections with your audience. Our storytelling approach helps communicate your brands message in a manner that resonates emotionally leaving an impression, on your customers."
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
          className="col-start-2 col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center mt-[35px]">Our Services</motion.h1>
            <motion.p
            ref={title} 
            initial={{ opacity:0, }}
            animate={ titleInView? { opacity:1,  } : {}} 
            transition={{ duration:0.5, delay:0.2 }}
            className="col-start-1 col-span-full 425:col-start-2 425:col-span-6 lg:col-start-3 lg:col-span-4 2xl:col-start-4 2xl:col-span-3 text-center">
              Explore a comprehensive range of solutions designed to elevate your business. Our services are tailored to your specific needs and goals.
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