import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"

export default function MarqueeSlider (props:any){

    const marquee=["/Metaplex.png","/SolanaFoundation.png","/Brave.png","/FlashTrade.png","/Solayer.png","/Mtndao.png","/IslandDao.png"]

    return(
        <div>
            <Marquee
            autoFill
            speed={50}
            direction={props.direction}>
                {marquee.map((img, i)=>(
                    <div className="w-[25vw] mx-[5vw] my-[2vw] lg:mx-[25px] lg:my-[12px] max-w-[190px]">
                        <img  src={img}></img>
                    </div>
                ))}
            </Marquee>

        </div>
    )
}