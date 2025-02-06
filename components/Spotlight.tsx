import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Spotlight(props: any) {
const controls = useAnimation();

useEffect(() => {
const animate = async () => {
    while (true) {
    const randomScale = (Math.random() * 0.4 + 0.8).toFixed(2);
    const randomOpacity = (Math.random() * 0.5 + 0.5).toFixed(2);
    await controls.start({
        scale: parseFloat(randomScale),
        opacity: parseFloat(randomOpacity),
        transition: { duration: 10, ease: "easeInOut" },
    });
    }
};
animate();
}, [controls]);

return (
<div className="relative">
    <motion.div
    animate={controls}
    className="rounded-full bg-[#C8DDF8] blur-[260px]"
    style={{ width: props.size + "px", height: props.size + "px" }}
    />
</div>
);
}
