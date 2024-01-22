import {gsap} from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger) 


export default function Skyrise(){

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
                        trigger: ".skyrise",
                        start: "top top",
                        end: "+=1500",
                        scrub: 1,
                        pinSpacing: true,
                        markers: true,
                    },
        })
        tl.to(".k", {
            y: "100%"
        })
        tl.to(".y", {
            y: "100%"
        })
        tl.to(".i", {
            y: "100%"
        })
        tl.to(".s2", {
            y: "100%"
        })
        tl.to(".e", {
            y: "100%"
        })
        tl.to(".s", {
            x:200,
            delay:2
        })


        }, []);


    return(
        <div className="flex justify-center items-center bg-red-300 pb-[1500px]">
            <h1 className="text-[200px] skyrise overflow-hidden">
                <span className="s inline-block">S</span>
                <span className="k inline-block up">k</span>
                <span className="y inline-block up">y</span>
                <span className="r inline-block">R</span>
                <span className="i inline-block up">i</span>
                <span className="s2 inline-block up">s</span>
                <span className="e inline-block up">e</span>
            </h1>
        </div>
    )
}