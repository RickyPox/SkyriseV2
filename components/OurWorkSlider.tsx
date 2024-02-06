import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { work } from "@/components/OurWorkSliderArray";
import { motion } from "framer-motion";
import Button from "./Button";
import { useRef, useState } from "react";

export default function OurWorkSlider() {
    const [isSliderExpanded, setIsSliderExpanded] = useState<null | number>(null);
    const sliderRef = useRef<Slider>(null);

    const toggleSlideOpen = (index: number) => {
        if (isSliderExpanded === index) {
            setIsSliderExpanded(null);
        } else {
            sliderRef.current?.slickGoTo(index);
            setTimeout(() => {
                setIsSliderExpanded(prevState => (prevState === index ? null : index));
            }, 50);
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        variableWidth: true,
        beforeChange: () => setIsSliderExpanded(null),
    };

    const getSlideWidth = () => {
        if (typeof window !== "undefined") {
        const windowWidth = window.innerWidth;
          return isSliderExpanded !== null ? windowWidth * 0.8 : "";
        }
        return "";
      };
    

    return (
        <div>
            <Slider {...settings} ref={sliderRef}>
                {work.map((item, index) => (
                    <div key={index} style={{ width: isSliderExpanded === index ? getSlideWidth() : " "  }}>
                        <motion.div
                            className={`rounded-[25px] flex`}
                            style={{ backgroundColor: item.bgColor, color: item.textColor,}}
                            layout
                            onClick={() => toggleSlideOpen(index)}
                        >
                            <div className={`w-1/2 px-[60px] py-[120px] ${isSliderExpanded === index ? "block" : "hidden"}`}>
                                <h1 className='text-[60px]'>{item.name}</h1>
                                <p>{item.service}</p>
                                <p>{item.text}</p>
                                <div className='flex'><Button title="Lorem Ipsum" color={item.textColor}></Button></div>
                            </div>
                            <div>
                                <img className='' src={item.img} alt={item.name} />
                            </div>
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
