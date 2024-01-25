import {gsap} from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"

gsap.registerPlugin(ScrollTrigger) 


export default function Skyrise(){

    const [show, setShow] = useState (true)

    useEffect(() => {
        // gsap.to(".up", {
        //     scrollTrigger: {
        //         pin: true,
        //         trigger: ".skyrise",
        //         start: "top top",
        //         end: "+=1500",
        //         scrub: true,
        //         pinSpacing: true,
        //         markers: true,
        //     },
        //     stagger:0.5,
        //     y: 300,
        // }); 
        
        const tl = gsap.timeline({
            scrollTrigger: {
                        pin: true,
                        trigger: ".trigger",
                        start: "top top",
                        end: "+=500",
                        scrub: 1,
                        pinSpacing: true,
                        onEnter: () => {
                            setShow(true)
                        },
                        onEnterBack:() => {
                            setShow(true)
                        },
                        onLeaveBack:() => {
                            setShow(true)
                        }
                    },
                    onComplete: () => {
                        setShow(false)
                    }
        })

        tl.to(".k", {
            y: "-100%",
        })
        tl.to(".y", {
            y: "-100%"
        })
        tl.to(".i", {
            y: "-100%"
        })
        tl.to(".s2", {
            y: "-100%"
        })
        tl.to(".e", {
            y: "-100%"
        })

        }, []);


    return(
        <motion.div className="flex justify-center items-center bg-[#1D1D1D] min-h-screen trigger">
            <motion.h1 className="2xl:text-[200px] md:text-[120px] overflow-hidden 2xl:px-[300px] md:px-[150px] sm:text-[60px] sm:px-[80px] text-[50px] px-[60px]">
                <motion.span layout className="s inline-block">S</motion.span>
                <span className={`k ${show ? "inline-block" : "hidden"}`}>k</span>
                <span className={`y ${show ? "inline-block" : "hidden"}`}>y</span>
                <motion.span layout className="r inline-block">R</motion.span>
                <span className={`i ${show ? "inline-block" : "hidden"}`}>i</span>
                <span className={`s2 ${show ? "inline-block" : "hidden"}`}>s</span>
                <span className={`e ${show ? "inline-block" : "hidden"}`}>e</span>
            </motion.h1>
        </motion.div>
    )
}