import {gsap} from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger) 


export default function Skyrise(){

    
useEffect(() =>{
    gsap.to(".skyrise", {
        scrollTrigger: {
            pin:true,
            trigger:".skyrise",
            start:"top top",
            markers: true,
            end:"+=500",
            scrub: true,
            pinSpacing: true,
        },
    })
}, [])

    return(
        <div className="flex justify-center bg-red-300">
            <h1 className="text-[200px] skyrise">
                <span className="s translate-y-[50%]">S</span>
                <span className="k">k</span>
                <span className="y">y</span>
                <span className="r">R</span>
                <span className="i">i</span>
                <span className="s2">s</span>
                <span className="e">e</span>
            </h1>
        </div>
    )
}