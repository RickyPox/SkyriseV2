import { useState } from "react"

export default function Button (props:any){

    const [isHover, setIsHover]=useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    return(
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`w-[210px] lg:w-[295px] py-[20px] lg:py-[25px] flex gap-[10px] justify-center ${isHover ? "bg-gradient-to-r from-[#DAE8FA] to-[#FDFDFD] hover:text-[#050505]" : ""}`}
        style={{ 
            border: `solid 1px ${props.color}`
         }}>
        <p>{props.title}</p>
        <div className="flex items-center">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.876036 15L0 14.124L12.8271 1.27243H1.00325V0H15V13.9967H13.7275V2.17293L0.876036 15Z" fill={props.color ? `${isHover ? "#050505" : props.color}` : `${isHover ? "#050505" : "#FDFDFD"}`}/>
            </svg>
        </div>

    </div>
    )
}