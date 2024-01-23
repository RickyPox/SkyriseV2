import { useEffect, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function ServicesModal ({ isVisible, onClose}:any){

    useEffect(() => {
        document.body.style.overflow = isVisible ? "hidden" : "auto";

        return () => {
            document.body.style.overflow ="auto";
        }
    }, [isVisible])

    return(
    <div 

        className={`fixed  backdrop-blur-[30px] w-screen overflow-hidden z-10 top-0 transition-all duration-200 justify-center ${isVisible ? "h-screen " : "h-0 "}`}> 
            <div className="flex justify-end mt-[80px] mr-[80px] z-20 relative" onClick={onClose}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3224 18L1.35421e-06 2.67756L2.67756 0L18 15.3224L33.3224 1.35421e-06L36 2.67756L20.6776 18L36 33.3224L33.3224 36L18 20.6776L2.67756 36L0 33.3224L15.3224 18Z" fill="#FEFEFE"/>
                </svg>
            </div>
            <div className="absolute flex items-center justify-center gap-[50px] w-screen h-screen top-0">
                <div><Button title="Download Deck"></Button></div>
                <div><Button title="Schedule A Meeting"></Button></div>
            </div>
            
        </div>
    )
}