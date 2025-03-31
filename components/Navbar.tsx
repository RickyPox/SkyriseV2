import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [text, setText] = useState("SkyRise Studios");
    const [isHovered, setIsHovered] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        let typingEffect: any;
        let index = -1;
        const word = "Coming Soon";

        if (isHovered) {
            setText(""); // Removes Start Text
            typingEffect = setInterval(() => {
                if (index < word.length - 1) {
                    index++;
                    setText((prev) => prev + word[index]);
                } else {
                    clearInterval(typingEffect);
                }
            }, 50); // velocity
        } else {
            setText("SkyRise Studios"); // Return to original text when not hovered
        }

        return () => clearInterval(typingEffect); // Cleanup on unmount or hover change
    }, [isHovered]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = document.querySelectorAll("section");
            sections.forEach((section: any) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (
                    window.scrollY >= sectionTop - sectionHeight / 3 &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: "About US", href: "#About", id: "About" },
        { name: "Services", href: "#Services", id: "Services" },
        { name: "Work", href: "#CaseStudies", id: "CaseStudies" },

        { name: "Contact Us", href: "#Contacts", id: "Contacts" },
    ];

    return (
        <div
            className={`gridLayout lg:grid mx- flex justify-center w-full max-w-[1920px] hoverTransition z-50 fixed ${
                isScrolled ? "lg:top-[0px] top-[20px]" : "top-[20px]"
            }`}
        >
            <div className="xl:col-start-2 xl:col-span-9 lg:col-start-2 lg:col-span-6 col-span-full flex justify-between py-[20px]">
                <Link href="#Home">
                    <h2 className="text-[#DAE8FA] flex justify-center lg:justify-start min-w-[220px]">
                        SkyRise Labs /
                        <span
                            className="text-[#606060] flex min-w-[110px]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {"\xa0"}
                            {text}
                        </span>
                    </h2>
                </Link>
                <div className="lg:flex hidden">
                    {navigation.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center"
                        >
                            <Link href={item.href}>
                                <h2
                                    className={`text-[#606060] hover:text-[#DAE8FA] hoverTransition ${
                                        activeSection === item.id
                                            ? "text-[#DAE8FA]"
                                            : ""
                                    }`}
                                >
                                    {item.name}
                                    {i < navigation.length - 1 && (
                                        <span className="mx-2 text-[#606060]">
                                            /
                                        </span>
                                    )}
                                </h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
