import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Navbar (){
    
    const navigation = [
        {
            name:"Work",
            href:"#"
        },
        {
            name:"Services",
            href:"#"
        },
        {
            name:"Network",
            href:"#"
        },
        {
            name:"Contact",
            href:"#"
        },
    ]

    const container = {
        hidden: { opacity:0, scale:0 },

        show: { 
            opacity:1, 
            scale:1,
            transition: { duration:0.5, staggerChildren:0.1, delayChildren:0.3 }
        },
    };

    const children = {
        hidden: {opacity:0, scale:0},
        show:{ opacity:1, scale:1 }
    }

    const [isShown, setIsShown] = useState(false)

    const handleShowMenu = () => {
        setIsShown(!isShown)
    }

    if(isShown === true){
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    } else {
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'unset';
        }
    }

    return(<div>
            <div className=" gridLayout lg:grid flex justify-center items-center relative">
                <img src="Logo.png" className="w-[70px]"></img>
                    {navigation.map((item, i) => (
                    <div className="lg:block hidden" key={i} style={{ gridColumnStart: (i*2)+3 }}>
                        <Link href={item.href}><p className="nav">{item.name}</p></Link>
                    </div>
                    ))}

                {!isShown &&
            <div onClick={handleShowMenu} className="block lg:hidden cursor-pointer absolute right-[5%]">
                <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.67773H35.3553" stroke="#FFFFFF" stroke-width="2"/>
                    <path d="M0 9.85547H35.3553" stroke="#FFFFFF" stroke-width="2"/>
                    <path d="M0 18.0332H35.3553" stroke="#FFFFFF" stroke-width="2"/>
                </svg>
            </div>
            }
            </div>

                

             {/* MOBILE */}
             {isShown && 
            <motion.div 
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            transition={{ duration:0.5 }}
            className="bg-white/10 backdrop-blur-lg w-screen h-screen fixed z-20 flex items-center justify-center top-0">
                <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity: 1 }}
                transition={{ duration:0.5 }}
                onClick={handleShowMenu} className="cursor-pointer absolute top-[3%] right-[6%]">
                    <svg className="w-[7vw] sm:w-[5vw]" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L47 47" stroke="#FFFFFF" stroke-width="3"/>
                        <path d="M2 47L47 2" stroke="#FFFFFF" stroke-width="3"/>
                    </svg>
                </motion.div>
                <motion.div 
                variants={container}
                initial="hidden"
                animate={isShown ? "show" : "hidden"}
                className="flex flex-col lg:hidden justify-evenly items-center h-full">
                    {navigation.map((item, index)=>(
                        <motion.div 
                        variants={children}
                        key={index} onClick={handleShowMenu}>
                        <Link href={item.href}><p className="nav text-[50px]">{item.name}</p></Link>                        
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            }
        </div>
    )
}