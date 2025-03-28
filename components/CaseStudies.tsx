import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";

export default function CaseStudies() {
    const title = useRef(null);
    const titleInView = useInView(title, { once: true });

    const content = useRef(null);
    const contentInView = useInView(content, { once: true });

    const [isHovered, setIsHovered] = useState<number | null>(null);

    const clients = [
        {
            img: "IslandDao.svg",
            text: "[Event Design & Programming, Marketing & Content Strategy, OPERATIONAL EXCELLENCE]",
            link: "https://drive.google.com/file/d/1ZuFn7-EjK-DtaWi-OjbOdnQZ2se_C6St/view",
        },
        {
            img: "Carrot.svg",
            text: "[Educational Content Strategy, Community Building, Trust Building & Transparency]",
            link: "https://drive.google.com/file/d/1cx33WHseFYlAvipDqR8bUEwOgLOA_Pjv/view",
        },
        {
            img: "Flash.svg",
            text: "[FOUNDATION BUILDING, PARTNERSHIP ACTIVATION, LAUNCH PREPARATION]",
            link: "https://drive.google.com/file/d/1N8dU3_Gm17IZSpv1V5T56ZG5Ayy_O7Ye/view",
        },
        {
            img: "Mtndao.svg",
            text: "[CONTENT STRATEGY, COMMUNITY BUILDING, OPERATIONAL EXCELLENCE]",
            link: "https://drive.google.com/file/d/1ZuFn7-EjK-DtaWi-OjbOdnQZ2se_C6St/view",
        },
    ];
    return (
        <div className=" max-w-[1920px]">
            <div className="gridLayout grid relative">
                <motion.h2
                    ref={title}
                    initial={{ opacity: 0 }}
                    animate={titleInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center col-span-full"
                >
                    [LABS CASE STUDIES]
                </motion.h2>
                <motion.h4
                    ref={title}
                    initial={{ opacity: 0 }}
                    animate={titleInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="xl:col-start-3 xl:col-span-7 col-start-1 col-span-full text-center"
                >
                    As both advocates and challengers in the Web3 space, we
                    combine strategic insight with creative execution to
                    transform innovative projects into mainstream success
                    stories.
                </motion.h4>
            </div>

            <motion.div
                ref={content}
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="gridLayout grid pt-[105px]"
            >
                <div className="xl:col-start-2 xl:col-span-9  lg:col-span-full sm:col-start-2 sm:col-span-4 col-span-full flex flex-wrap lg:gap-x-[1vw] lg:gap-y-[1vw] gap-y-[50px]">
                    {clients.map((client, i) => (
                        <div key={i} className="lg:w-[48%] w-full">
                            <SpotlightCard
                                className="custom-spotlight-card "
                                spotlightColor="rgba(239, 246, 254, 0.4)"
                            >
                                <Link href={client.link} target="_blank">
                                    <div
                                        onMouseEnter={() => setIsHovered(i)}
                                        onMouseLeave={() => setIsHovered(null)}
                                        className={`${
                                            isHovered === i
                                                ? "border-[#EFF6FE00] border-[1px]"
                                                : "border-[1px] border-[#EFF6FE]"
                                        }  hoverTransition flex flex-col gap-y-[10px] justify-center items-center w-full lg:py-[60px] h-[300px] px-[10px] lg:px-0`}
                                    >
                                        <div className="flex flex-col items-center w-full">
                                            <img
                                                className="lg:w-[201px] lg:h-[61px] object-contain"
                                                src={`/clients/${client.img}`}
                                            />
                                            <div className="h-[1px] max-w-[280px] w-full bg-[#C8DDF8] mt-[25px] mb-[30px] mx-[90px]" />
                                            <h2 className="lg:px-[50px] text-center uppercase">
                                                {client.text}
                                            </h2>
                                        </div>
                                    </div>
                                </Link>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
