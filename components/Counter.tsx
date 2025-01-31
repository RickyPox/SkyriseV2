import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import SpotlightCard from './SpotlightCard';


export default function Counter(props: any) {
    const [count, setCount] = useState(0);
    const ref = useRef(null); // Reference for the component
    const isInView = useInView(ref, { margin:"-20% 0px -20% 0px", once: true }); // Checks if the component is visible
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (!isInView) return; // Start animation only when the component is visible

        let start = 0; // Initial value
        const end = props.total; // Final value
        const increment = 100; // Increment value per step
        const duration = 500; // Total duration of the animation (in ms)
        const stepTime = Math.abs(Math.floor(duration / (end / increment))); // Time between increments

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer); // Stop animation when reaching the final value
            }
            setCount(start);
        }, stepTime);

        return () => clearInterval(timer); // Clean up the interval when the component unmounts
    }, [isInView, props.total]);

    return (
          
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(239, 246, 254, 0.4)">
            <div
                ref={ref} // Attach the reference to monitor visibility
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} 
                className={`${isHovered ? "border-[#EFF6FE00] border-[1px]" : "border-[1px] border-[#EFF6FE]"} hoverTransition flex flex-col gap-y-[10px] justify-center items-center w-full py-[24px]`}
            >
                <h2>{props.title}</h2>
                <h5>{count}+</h5>
            </div>
        </SpotlightCard>
    );
}
