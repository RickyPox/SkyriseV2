import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SpotlightCard from './SpotlightCard';

const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
};

export default function Counter(props: { total: number; title: string; delay?: number, after?: string, before?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });
    const hasMounted = useHasMounted();

    useEffect(() => {
        if (!isInView || !hasMounted) return;

        const end = props.total;
        const duration = 1000;
        const delay = (props.delay ? props.delay * 1000 : 0); 

        const startAnimation = () => {
            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        const timeout = setTimeout(startAnimation, delay);

        return () => clearTimeout(timeout);
    }, [isInView, props.total, props.delay, hasMounted]);

    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(239, 246, 254, 0.4)">
            <div
                ref={ref}
                className="border-[1px] hoverTransition flex flex-col gap-y-[10px] justify-center items-center w-full py-[24px]"
            >
                <h2>{props.title}</h2>
                <h5>
                    <motion.span 
                    initial={{ opacity:0 }}
                    animate={{ opacity: count === props.total ? 1 : 0 }}
                    transition={{ duration: 1 }}>
                        {count === props.total && props.before}</motion.span>
                    {count}
                    <motion.span
                    initial={{ opacity:0 }}
                    animate={{ opacity: count === props.total ? 1 : 0 }}
                    transition={{ duration: 1 }}>{count === props.total && props.after}</motion.span>+</h5>
            </div>
        </SpotlightCard>
    );
}
