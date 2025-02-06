import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [text, setText] = useState("SkyRise Studios");
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let typingEffect: any;
        let index = -1; 
        const word = "Coming Soon";

        if (isHovered) {
            // Removes Start Text
            setText("");

            typingEffect = setInterval(() => {
                if (index < word.length - 1) {
                    index++;  
                    setText((prev) => prev + word[index]); // Adds next Character
                } else {
                    clearInterval(typingEffect); 
                }
            }, 50); // velocity
        } else {
            //returns to original text when not hovered
            setText("SkyRise Studios");
        }

        // Limpeza do intervalo quando o efeito for removido ou o componente for desmontado
        return () => clearInterval(typingEffect);
    }, [isHovered]); // Reage a mudanças em `isHovered`

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Altera quando rolar mais de 50px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        {
            name: "About US",
            href: "#About",
        },
        {
            name: "Previous Work",
            href: "#Work",
        },
        {
            name: "Our Services",
            href: "#Services",
        },
        {
            name: "Contact Us",
            href: "#Joblist",
        },
    ];

    return (
        <div
            className={`fixed left-[50%] -translate-x-[50%] top-0 w-screen z-50 hoverTransition   ${
                isScrolled ? " mt-0" : " mt-[40px]"
            }`}
        >
            <div className="gridLayout lg:grid flex justify-center max-w-[1920px]">
                <div className="xl:col-start-2 xl:col-span-9 col-span-full flex justify-between py-[20px]">
                    <h2 className="text-[#DAE8FA] flex min-w-[220px]">
                        SkyRise Labs / 
                        <span
                            className="text-[#606060] flex min-w-[110px]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                           {"\xa0"}{text}
                        </span>
                    </h2>
                    <div className="lg:flex hidden">
                        {navigation.map((item, i) => (
                            <div key={i} className="flex items-center justify-center">
                                <Link href={item.href}>
                                    <h2 className="text-[#606060] hover:text-[#DAE8FA] hoverTransition">
                                        {item.name}
                                        {i < navigation.length - 1 && (
                                            <span className="mx-2 text-[#606060]">/</span>
                                        )}
                                    </h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
