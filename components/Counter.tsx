import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import SpotlightCard from './SpotlightCard';

export default function Counter(props: any) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isInView) return;

        const end = props.total;
        const duration = 1000; // Animation Duration (ms)
        const startTime = performance.now(); // Initial time

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const newValue = Math.floor(progress * end);
            setCount(newValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, props.total]);

    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(239, 246, 254, 0.4)">
            <div
                ref={ref}
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
