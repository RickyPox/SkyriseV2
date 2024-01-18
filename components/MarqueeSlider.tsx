import Marquee from "react-fast-marquee";

export default function MarqueeSlider (){
    return(
        <div>
            <Marquee
            autoFill
            speed={50}>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
                <img className="mx-[25px]" src="/marqueeSlider/Anybodies.png"></img>
            </Marquee>
        </div>
    )
}