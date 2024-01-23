import Button from "@/components/Button";
import { useState } from "react";
import {motion} from "framer-motion"
import ServicesModal from "./ServicesModal";

const services=[
    {
        name: "Growth",
        text:"We specialize in crafting your company's value proposition and developing a tailored roadmap to steer your journey. ",
    },
    {
        name: "Tech",
        text:"We excel in delineating your company's value proposition and crafting a personalized roadmap to navigate and drive your growth in the tech realm.",
    },
    {
        name: "Storytelling",
        text:"There is no brand without a story. We combine storytelling with data-driven insights to create a compelling brand narrative that engages and retains users.",
    },
]



export default function OurServices(){

    const [opacity, setOpacity] = useState([1, 0.5, 0.5]); // Initial opacity state
    const [expandedText, setExpandedText] = useState(null); // ExpandServiceText
    const [rotateMore, setRotateMore] = useState(0);

const handleMouseEnter = (index:any) => {
  // Set opacity to 1 for the hovered service, and 0.5 for the rest
    setOpacity(opacity.map((_, i) => (i === index ? 1 : 0.5)));
};

const handleMouseLeave = () => {
  // Do nothing on mouse leave to keep the last hovered service with opacity 1
};

const handleTextExpand = (index:any) => {
    setExpandedText(expandedText === index ? null : index);
    setRotateMore(rotateMore === 90 ? 0 : 90);

};

return(
    <div>
        <div>
            <ServicesModal></ServicesModal>
        </div>
        <div>
            <h1 className="Ourservice">Our Services</h1>
            <p className="w-1/3">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                Nullam eget diam nec est facilisi faucibus. 
                Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.
            </p>
        
        <div className="flex mt-[30px]">
            <Button color="#FEFEFE" title="Get to Know Us"></Button>
        </div>
        </div>
        <div className="flex flex-col gap-[200px] mt-[70px]">
            {services.map((service, index) =>(
                <div className="grid grid-cols-7" 
                key={index}>
                    <div className="col-start-4 col-span-3 grid grid-cols-3"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ opacity: opacity[index], transition:"opacity ease-in-out 0.25s" }}>
                        <h2 className="col-start-1 flex"><span className="mr-[10px] text-[16px]">{index+1}</span>{service.name}</h2>
                        <motion.p
                        initial= {{ height: "4rem" }}
                        animate= {{ height: expandedText === index ? "auto" : "4rem" }}
                        className={`col-start-2 col-span-2 border-t-[1px] border-[#FEFEFE] mt-[50px] overflow-hidden leading-[2rem]`}>{service.text}</motion.p>
                        <div className="flex col-start-3 justify-end mt-[40px] cursor-pointer" onClick={() => handleTextExpand(index)}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{ transform: `rotate(${rotateMore}deg)`, transition: "transform ease-in-out 0.25s"}}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5294 21V5H13.4706V21H12.5294Z" fill="#FEFEFE"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13.4706L5 13.4706L5 12.5294L21 12.5294V13.4706Z" fill="#FEFEFE"/>
                                <circle cx="13" cy="13" r="12.5" stroke="#FEFEFE"/>
                            </svg>
                        </div>
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}