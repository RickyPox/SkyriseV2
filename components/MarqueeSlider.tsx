import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeSlider(props: any) {
    const marquee = [
        { img: "Metaplex.png", width: "195px" },
        { img: "SolanaFoundation.png", width: "130px" },
        { img: "Brave.png", width: "92px" },
        { img: "MagicEden.png", width: "142px" },
        { img: "BlocksmithLabs.png", width: "210px" },
        { img: "DeadKingSociety.png", width: "187px" },
        { img: "Solayer.png", width: "120px" },
        { img: "StreamFlow.png", width: "175px" },
        { img: "mtndao.png", width: "140px" },
        { img: "Flash.png", width: "95px" },
        { img: "IslandDao.png", width: "105px" },
        { img: "Goated.png", width: "140px" },
    ];

    const imagesToRender = props.reverse ? [...marquee].reverse() : marquee;

    return (
        <div className="-z-50 relative">
            <Marquee
                autoFill
                speed={25}
                direction={props.direction ? props.direction : "left"}
            >
                {imagesToRender.map((img, i) => (
                    <div
                        key={i}
                        className="mx-[5vw] my-[2vw] lg:mx-[25px] lg:my-[12px]"
                    >
                        <img
                            src={"/marquee/" + img.img}
                            style={{ width: img.width }}
                            alt=""
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}