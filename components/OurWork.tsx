import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css/bundle';
import {motion} from "framer-motion"
import { useState } from 'react';
import Button from './Button';

export default function OurWork(){

    const [isSliderExpanded, setIsSliderExpanded] = useState<null | number>(null);

    const work = [
        {
            name: "Yuga Labs",
            img: "/YugaLabs.png",
            service: "BRANDING / WEB DESIGN / LOREM IPSUM",
            text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.",
            buttonHref: "#",
            bgColor: "#FEFEFE",
            textColor: "#000000"
        },
        {
            name: "Yuga Labs 2",
            img: "/YugaLabs.png",
            service: "BRANDING / WEB DESIGN / LOREM IPSUM",
            text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.",
            buttonHref: "#",
            bgColor: "#FEEE33",
            textColor: "#000000"
        },
        {
            name: "Yuga Labs 3",
            img: "/YugaLabs.png",
            service: "BRANDING / WEB DESIGN / LOREM IPSUM",
            text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.",
            buttonHref: "#",
            bgColor: "#FEFDED",
            textColor: "#000000"
        },
        {
            name: "Yuga Labs 4",
            img: "/YugaLabs.png",
            service: "BRANDING / WEB DESIGN / LOREM IPSUM",
            text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.",
            buttonHref: "#",
            bgColor: "#23D326",
            textColor: "#000000"
        }
    ]


    const handleSlideClick = (index: number) => {
        setIsSliderExpanded((prevIndex) => (prevIndex === index ? null : index));
    };

    return(
        <div>
            <div className='mb-[150px] mx-[100px]'>
                <h1 className="Ourwork">Our Work</h1>
                <p className="w-1/3">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                    Nullam eget diam nec est facilisi faucibus. 
                    Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</p>
            </div>
            <div>
                <Swiper
                slidesPerView={isSliderExpanded !== null ? 1 : 2}
                spaceBetween={20}
                loop = {true}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                pagination={{ 
                    el: "#bulletContainer",
                    bulletClass:"swipper-bullet-custom-pagination",
                    bulletActiveClass:"swipper-bullet-custom-pagination-active",
                    clickable:true,}}
                >
                    {work.map((item, index) =>(
                        <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
                        <motion.div 
                        className={`flex rounded-[25px] justify-center items-center ${isSliderExpanded === index ? "w-[80%]" : "w-auto"}`} 
                        style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        layout>
                            <div className={`w-1/2 px-[60px] py-[120px] ${isSliderExpanded === index ? "block" : "hidden"} `}>
                            <h1 className='text-[60px]'>{item.name}</h1>
                            <p>{item.service}</p>
                            <p>{item.text}</p>
                            <div className='flex'><Button title="Lorem Ipsum" color={item.textColor}></Button></div>
                            </div>
                            <div>
                                <img className='' src={item.img}></img>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    ))}
                    


                </Swiper>
                <div id="bulletContainer" className='flex gap-[10px] justify-center mt-[60px]'></div>
            </div>
        </div>
    )
}