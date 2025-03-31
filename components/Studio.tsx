import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SpotlightCard from "./SpotlightCard";

export default function Studio() {
    const title = useRef(null);
    const titleInView = useInView(title, { once: true });

    const content = useRef(null);
    const contentInView = useInView(content, { once: true });

    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openVideo = (item: any) => {
        if (!isOpen) {
            // Desabilitar o scroll
            document.documentElement.style.overflow = "hidden";
        } else {
            // Reativar o scroll
            document.documentElement.style.overflow = "";
        }

        setSelectedItem(item?.video || null);
        setIsOpen(!isOpen);
    };

    const studio = [
        {
            title: "Magic Eden Off-Site | 2024",
            img: "Magic_Eden.png",
            video: "https://www.youtube.com/embed/p0mQ1PKX1nQ?si=JFHDTJZOW-m9HmXt",
            categorie: "Off-Site Coverage",
        },
        {
            title: "Mad Lads x Backpack Party, Bangkok | 2024",
            img: "MadLads_ Backpack_Party_Bangkok.png",
            video: "https://www.youtube.com/embed/VEJRxkTwOkw?si=pADs59uvKwO72ha8",
            categorie: "Party Coverage",
        },
        {
            title: "mtnDAO v7 | Week 1 Recap | Winter 2025",
            img: "mtnDAO_v7_Week_1_Recap.png",
            video: "https://www.youtube.com/embed/9IKwVHN6xfw?si=p0mU78UA41ANAA-3",
            categorie: "Weekly Video Recap",
        },
        {
            title: "IslandDAO v1, Crete | Recap #4 | 2024",
            img: "islandDAO_v1_crete_week4.png",
            video: "https://www.youtube.com/embed/0HWaXwpBurE?si=NseSZd6TDuKkzWem",
            categorie: "Weekly Video Recap",
        },
        {
            title: "Moonwalk | Hacker House, London | 2024",
            img: "Moonwalk_HackerHouse_London.png",
            video: "https://www.youtube.com/embed/R2LgORJWAog?si=6d4mf1i9dbMWeRQO",
            categorie: "Product Activation",
        },
        {
            title: "TidalDAO x Drift Mixer, Salt Lake City | 2025",
            img: "tidalDAO_Drift.png",
            video: "https://www.youtube.com/embed/kS5HRGcevlE?si=7mtgIffAoZj5dDyN",
            categorie: "Party Coverage",
        },
        {
            title: "mtnDAO v7 | Week 4 Recap | Winter 2025",
            img: "mtnDAO_v7_Week_4_Recap.png",
            video: "https://www.youtube.com/embed/0woFt-Ua7Yo?si=aTpOtNZ4WMbsOOu1",
            categorie: "Weekly Video Recap",
        },
        {
            title: "Moonwalk | mtndao Hike, Salt Lake City | Summer 2024",
            img: "Moonwalk_MtnDAO.png",
            video: "https://www.youtube.com/embed/O-2hKYTifUg?si=ygO3uNqqVcqSBjAB",
            categorie: "Product Activation",
        },
    ];

    return (
        <div className="max-w-[1920px]">
            <div className="gridLayout grid relative">
                <motion.h2
                    ref={title}
                    initial={{ opacity: 0 }}
                    animate={titleInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center col-span-full"
                >
                    [STUDIOS WORK]
                </motion.h2>
                <motion.h4
                    ref={title}
                    initial={{ opacity: 0 }}
                    animate={titleInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="xl:col-start-3 xl:col-span-7 col-start-1 col-span-full text-center"
                >
                    Want to ditch flat storytelling? We craft dynamic videos
                    that grab attention and keep viewers engaged. Our expert
                    team combines professional filming with seamless editing to
                    showcase your project in the best light
                </motion.h4>
            </div>

            <div className="gridLayout grid pt-[105px]">
                <motion.div
                    ref={content}
                    initial={{ opacity: 0 }}
                    animate={contentInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="xl:col-start-2 xl:col-span-9 lg:col-span-full sm:col-start-2 sm:col-span-4 col-span-full flex flex-wrap lg:gap-x-[1vw] lg:gap-y-[50px] gap-y-[70px]"
                >
                    {studio.map((item, i) => (
                        <div
                            key={i}
                            className="lg:w-[48%] w-full cursor-pointer studio-item"
                            onClick={() => openVideo(item)}
                        >
                            <SpotlightCard
                                className="custom-spotlight-card"
                                spotlightColor="rgba(239, 246, 254, 0.4)"
                            >
                                <img
                                    className="aspect-video"
                                    src={`/studio/${item.img}`}
                                    alt={`video_${i + 1}`}
                                />
                            </SpotlightCard>
                            <div className="flex flex-col justify-center items-center mt-[20px] gap-y-[5px] text-center">
                                <p className="text-[24px] lg:text-[31px] leading-[125%] tex">
                                    {item.title}
                                </p>
                                <h2>[{item.categorie}]</h2>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {selectedItem && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={() => openVideo(null)}
                >
                    <div className="relative">
                        <iframe
                            className="w-[80vw] aspect-video"
                            src={selectedItem}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
