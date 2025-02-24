import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { sendGAEvent } from '@next/third-parties/google'

export default function Button (props:any){

    const [isHover, setIsHover]=useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    const Text = styled.p`
    color: #050505;
    @media (min-width: 1024px) {
    color: ${(props) => isHover ? "#050505" : props.color};
`;
    

    return(
        <Link href={props.href ? props.href : "#"}>
            <div   onClick={() => {sendGAEvent({ event: "buttonClicked", value: "xyz" });
                setTimeout(() => setIsHover(false), 100);}}  
                onMouseEnter={handleHover} onMouseLeave={handleHover} className="relative w-[210px] lg:w-[225px] py-[15px] flex gap-[10px] justify-center z-20"
                style={{ 
                    border: `solid 1px ${props.color}`
                }}
            >
            <Text color={props.color} className="hoverTransition">{props.title}</Text>
                <div className={`flex items-center`}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`hoverTransition ${isHover ? "block" : "lg:hidden block"}`} d="M0.876036 15L0 14.124L12.8271 1.27243H1.00325V0H15V13.9967H13.7275V2.17293L0.876036 15Z" fill= "#050505"/>
                        <path className={`hoverTransition ${isHover ? "hidden" : "lg:block hidden"}`} d="M0.876036 15L0 14.124L12.8271 1.27243H1.00325V0H15V13.9967H13.7275V2.17293L0.876036 15Z" fill= {props.color}/>
                    </svg>
                </div>

                <motion.div className={`absolute left-0 top-0 -z-10 hoverTransition ${isHover ? "w-full h-full" : "lg:w-0 w-full h-full"}`}
                style={{ background: `linear-gradient(to right, #DAE8FA, ${props.color}` }}></motion.div>
            </div>
    </Link>
    )
}