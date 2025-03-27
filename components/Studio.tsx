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
            title: "Dubai Recap 2024",
            img: "Dubai_Recap.png",
            video: "https://www.youtube.com/embed/M32j3AjV8h0?si=2RZmwk5uiL-qsYjz",
            categorie: "Advertisement Campaign",
        },
        {
            title: "NYC Cybertruck w/Jackey",
            img: "NYC_Cybertruck.png",
            video: "https://www.youtube.com/embed/mQNt69NNfhA?si=YnJrfTQUhipeIoGK",
            categorie: "Advertisement Campaign",
        },
        {
            title: "IslandDao Recap",
            img: "IslandDao.png",
            video: "https://www.youtube.com/embed/0HWaXwpBurE?si=Bt1R3PfQ_tuXPGK3",
            categorie: "Advertisement Campaign",
        },
        {
            title: "MtnDao",
            img: "Mtndao.png",
            video: "https://www.youtube.com/embed/p0mQ1PKX1nQ?si=AgCrCgUJIGJJxflv",
            categorie: "Advertisement Campaign",
        },
        {
            title: "MagicEden Runes B-Roll",
            img: "Magic_Eden.png",
            video: "https://www.youtube.com/embed/p0mQ1PKX1nQ?si=dIordFpa2TSA1wtS",
            categorie: "Advertisement Campaign",
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
                    As both advocates and challengers in the Web3 space, we
                    combine strategic insight with creative execution to
                    transform innovative projects into mainstream success
                    stories.
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
                                    src={`/studio/${item.img}`}
                                    alt={`video_${i + 1}`}
                                />
                            </SpotlightCard>
                            <div className="flex flex-col justify-center items-center mt-[20px] gap-y-[5px]">
                                <p className="text-[24px] lg:text-[31px] leading-[125%]">
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
