import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

interface ServiceContainerProps {
  index: number;
}

const ServiceContainer = styled.div<ServiceContainerProps>`

  @media (min-width: 1280px) {
    ${({ index }) => index % 2 === 0 ? `
      grid-column-start: 1;
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
      title:"Connect & Grow",
      text:"Our primary focus is, on driving growth by implementing strategies to attract and retain customers. Through the use of data driven insights and innovative marketing methods we ensure that your business expands efficiently and successfully.",
      img:"Growth.svg"
    },
    {
      title:"Branding & Design",
      text:"Developing a captivating and strategized brand is central to our work. Our team specializes in strategizing and designing visuals that not grab attention but also effectively convey your brands value creating a memorable impression on your target audience.",
      img:"Branding.svg"
    },
    {
      title:"Community Engagement",
      text:"Establishing a community is crucial for sustained success. We assist in nurturing connections with your audience transforming followers into dedicated advocates who genuinely support your brand.",
      img:"Community.svg"
    },
    {
      title:"Activate & Engage",
      text:"We strongly believe in the impact of storytelling to form connections with your audience. Our storytelling approach helps communicate your brands message in a manner that resonates emotionally leaving an impression, on your customers.",
      img:"Activate.svg"
    },
  ]

  const title=useRef(null)    
  const titleInView = useInView(title, { once: true });

  const content=useRef(null)
  const contentInView = useInView(content, { once: true });

return(
    <div className="max-w-[1920px]">
         <div className='gridLayout grid relative '>
                <motion.h2 
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5 }}
                className="text-center col-span-full">[OUR SERVICES]</motion.h2>
                <motion.h4
                ref={title} 
                initial={{ opacity:0, }}
                animate={ titleInView? { opacity:1,  } : {}} 
                transition={{ duration:0.5, delay:0.2 }}
                className="xl:col-start-3 xl:col-span-7 col-start-1 col-span-full text-center">
                    We provide comprehensive solutions tailored to your project's unique needs. Through our proven methodology, we connect, activate, and elevate your brand or product in the Web3 space.
                </motion.h4>
            </div>
        <motion.div 
          ref={content} 
          initial={{ opacity:0, }}
          animate={ contentInView ? { opacity:1,  } : {}} 
          transition={{ duration:0.5 }}
          className="gridLayout pt-[110px] flex flex-col 425:grid">
          <div className="xl:col-start-2 xl:col-span-9 xl:flex xl:flex-row xl:flex-wrap xl:justify-between lg:col-start-3 lg:col-span-4 sm:col-start-2 sm:col-span-4 col-span-full flex flex-col xl:gap-x-[20px] xl:gap-y-0 gap-y-[50px]">
          {services.map((item, i) =>(
              <div
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave} key={i} className={`flex flex-col gap-[10px] items-center justify-center mb-[60px] text-center col-start-1 col-span-full 425:col-start-2 425:col-span-6 xl:w-[44%]`}>
                  <img src={`/${item.img}`}/>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
              </div>
          ))}
          </div>
        </motion.div>
    </div>
  )
}