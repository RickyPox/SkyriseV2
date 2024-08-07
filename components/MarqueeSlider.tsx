import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"

export default function MarqueeSlider (){



    return(
        <div>
            <Marquee
            autoFill
            speed={50}
            style={{ marginTop:"50px" }}>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/BnbChain.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Brave.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Cardinal.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Clutchy.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/MagicEden.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Solana.png"></img>
            </Marquee>
            <Marquee
            autoFill
            speed={50}
            direction="right"
            style={{ marginTop:"50px" }}>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/BnbChain.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Brave.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Cardinal.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Clutchy.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/MagicEden.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Solana.png"></img>
            </Marquee>
        </div>
    )
}