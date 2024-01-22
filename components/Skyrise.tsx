import {gsap} from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger) 


export default function Skyrise(){

    
useEffect(() =>{
    gsap.to(".s", {
        scrollTrigger: {
            pin:true,
            trigger:".skyrise",
            start:"top top",
            markers: true,
            end:"+=500",
            scrub: true,
            pinSpacing: true,
        },
        y:300,
    })
    gsap.to(".k", {
        scrollTrigger: {
            pin:true,
            trigger:".skyrise",
            start:"top top",
            markers:{
                startColor: "#FFFFFF",
                endColor: "#FFF123"
            },
            end:"+=500",
            scrub: true,
            pinSpacing: true,
        },
        y:300,
    })

}, [])

    return(
        <div className="flex justify-center bg-red-300">
            <h1 className="text-[200px] skyrise overflow-hidden">
                <span className="s inline-block">S</span>
                <span className="k inline-block">k</span>
                <span className="y inline-block">y</span>
                <span className="r inline-block">R</span>
                <span className="i inline-block">i</span>
                <span className="s2 inline-block">s</span>
                <span className="e inline-block">e</span>
            </h1>
        </div>
    )
}