import Link from "next/link"
import { useState, useEffect } from "react";

export default function Navbar (){

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Altera quando rolar mais de 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
    const navigation = [
        {
            name:"About US",
            href:"#About"
        },
        {
            name:"Previous Work",
            href:"#Work"
        },
        {
            name:"Our Services",
            href:"#Services"
        },
        {
            name:"Contact Us",
            href:"#Joblist"
        },
    ]


    return(
            <div className={`fixed top-0 w-full z-50 hoverTransition max-w-[1920px]  ${isScrolled ? "bg-[#050505] mt-0" : "bg-transparent mt-[40px]"}`}>
                <div className="gridLayout lg:grid flex justify-center">
                    <div className="col-start-2 col-span-9 flex justify-between py-[20px]">
                        <h2 className="text-[#DAE8FA]">SkyRise Labs / <span className="text-[#606060]">SkyRise Studios</span></h2>
                        <div className="lg:flex hidden">
                            {navigation.map((item, i) => (
                            <div key={i} className="flex items-center justify-center">
                                <Link href={item.href}><h2 className="text-[#606060] hover:text-[#DAE8FA] hoverTransition">{item.name}{i < navigation.length - 1 && <span className="mx-2 text-[#606060]">/</span>}</h2></Link>
                            </div>
                            ))}
                            </div>
                    </div>
                </div>
            </div>
    )
}