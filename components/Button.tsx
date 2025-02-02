import { useState } from "react"

export default function Button (props:any){

    const [isHover, setIsHover]=useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    return(
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className="relative w-[210px] lg:w-[295px] py-[20px] lg:py-[25px] flex gap-[10px] justify-center"
        style={{ 
            border: `solid 1px ${props.color}`
        }}>
            <div className={`bg-gradient-to-r from-[#DAE8FA] to-[#FDFDFD] w-full h-full absolute top-0 -z-10 hoverTransition ${isHover ? "opacity-1" : "2xl:opacity-0 opacity-1"}`}></div>
        <p className={`hoverTransition ${isHover ? "text-[#050505]" : "2xl:text-[#FDFDFD] text-[#050505]"}`}>{props.title}</p>
        <div className={`flex items-center ${isHover ? "" : "buttonFilter"}`}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="hoverTransition" d="M0.876036 15L0 14.124L12.8271 1.27243H1.00325V0H15V13.9967H13.7275V2.17293L0.876036 15Z" fill={props.color ? `${isHover ? "#050505 " : props.color}` : `${isHover ? "#050505" : "2xl:#FDFDFD"}`}/>
            </svg>
        </div>

    </div>
    )
}