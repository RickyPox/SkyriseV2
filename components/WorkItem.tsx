import { useState } from "react"

export default function WorkItem(props:any){

    const [isHover, setIsHover]=useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }
    
    return(
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`flex items-center justify-center h-[270px] border-[#FFFFFF] border-[1px] ${isHover ? "bg-gradient-to-r from-[#DAE8FA] to-[#FDFDFD]" : ""}`}>
            <img src={isHover? props.hoverImg : props.img}></img>
        </div>
    )
}